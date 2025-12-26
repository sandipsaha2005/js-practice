const move = ({ x, y, direction }) => {
  const movementRules = {
    N: (x, y, direction) => ({ x, y: y + 1, direction }),
    E: (x, y, direction) => ({ x: x + 1, y, direction }),
    S: (x, y, direction) => ({ x, y: y - 1, direction }),
    W: (x, y, direction) => ({ x: x - 1, y, direction }),
  };

  return movementRules[direction](x, y, direction);
};

const turn = (position, towards) => {
  const { x, y, direction } = { ...position };

  const directions = ["N", "E", "S", "W"];
  const offSet = (towards === "L") ? 3 : 1;

  const idxOfCurrentDirection = directions.indexOf(direction);
  return {
    x,
    y,
    direction: directions[(idxOfCurrentDirection + offSet) % directions.length],
  };
};

const moveRover = (position, instructions) => {
  if (instructions.length === 0) return position;

  const mover = {
    M: (position) => move(position),
    L: (position) => turn(position, "L"),
    R: (position) => turn(position, "R"),
  };

  const [current, ...rest] = instructions;
  const updatedPosition = mover[current](position);

  return moveRover(updatedPosition, rest);
};

export const executeInstructions = (position, instructions) => {
  const [cx, cy, cd] = position.split(" ");

  const initialPosition = {
    x: parseInt(cx),
    y: parseInt(cy),
    direction: cd,
  };

  const { x, y, direction } = moveRover(initialPosition, instructions);
  return `${x} ${y} ${direction}`;
};
