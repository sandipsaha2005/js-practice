const isInRange = (start, end, value) => {
  return start <= value && value <= end;
};

const neighbourOf = (wordMap, currentCoordinates) => {
  const { row, col } = currentCoordinates;
  const coordinates = [
    { row: row - 1, col },
    { row: row + 1, col },
    { row: row, col: col - 1 },
    { row: row, col: col + 1 },
  ];
  const maxRow = wordMap.length - 1;
  const maxCol = wordMap[0].length - 1;
  return coordinates.filter(({ row, col }) =>
    isInRange(0, maxRow, row) && isInRange(0, maxCol, col)
  );
};

const _containsWord = (wordMap, word, currentCoordinates) => {
  if (word.length === 0) return true;
  const { row, col } = currentCoordinates;
  const char = wordMap[row][col];
  if (!word.startsWith(char)) return false;

  return neighbourOf(wordMap, currentCoordinates).some((coordinates) =>
    _containsWord(wordMap, word.slice(1), coordinates)
  );
};

const containsWord = (wordMap, word) => {
  for (let row = 0; row < wordMap.length; row++) {
    for (let col = 0; col < wordMap[row].length; col++) {
      if (_containsWord(wordMap, word, { row, col })) {
        return true;
      }
    }
  }
  return false;
};

const main = () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const word = "E";
  console.log(containsWord(board, word));
};

main();
