const ROVERACTIONS = {
  M: (position) => move(position),
  L: (position) => turn(position, -1),
  R: (position) => turn(position, 1),
};

const isBetween = (value, max, min) => (min <= value) && (value <= max);

const isInsidePlateau = ({ x, y }, { maxX, maxY, minX, minY }) =>
  isBetween(x, maxX, minX) && isBetween(y, maxY, minY);

export const move = ({ x, y, direction }) => {
  const movementRules = {
    N: { x, y: y + 1, direction },
    E: { x: x + 1, y, direction },
    S: { x, y: y - 1, direction },
    W: { x: x - 1, y, direction },
  };

  return movementRules[direction];
};

export const turn = ({ x, y, direction }, offSet) => {
  const directions = ["N", "E", "S", "W"];
  const index = (directions.indexOf(direction) + offSet) % directions.length;

  return { x, y, direction: directions.at(index) };
};

const moveRover = (initialPosition, instructions, plateau) => {
  let position = { ...initialPosition, isDead: false };
  for (const instruction of instructions) {
    const updatedPosition = ROVERACTIONS[instruction](position);
    if (!isInsidePlateau(updatedPosition, plateau)) {
      return { ...position, isDead: true };
    }

    position = updatedPosition;
  }
  return position;
};

const displayRoverState = ({ x, y, direction, isDead }) => {
  const isRip = isDead ? " RIP" : "";
  return `${x} ${y} ${direction}${isRip}`;
};

const parsePlateau = (plateau) => {
  const [maxX, maxY, minX, minY] = plateau.split(" ");

  return { maxX, maxY, minX, minY };
};

export const executeInstructions = (plateau, poistion, instruction) => {
  const [cx, cy, cd] = poistion.split(" ");
  const _plateau = parsePlateau(plateau);
  const initialPostition = {
    x: parseInt(cx),
    y: parseInt(cy),
    direction: cd,
  };

  const rover = moveRover(initialPostition, instruction, _plateau);
  return displayRoverState(rover);
};
