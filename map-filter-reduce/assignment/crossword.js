const leftToRightWordAtIndex = (wordMap, { row, col }, wordLength) => {
  const line = wordMap[row];
  return line.slice(col, col + wordLength).join("");
};

const rightToLeftWordAtIndex = (wordMap, { row, col }, wordLength) => {
  const line = wordMap[row];
  return line.slice(col - wordLength + 1, col + 1).toReversed().join("");
};

const topToBottomAtIndex = (wordMap, { row, col }, wordLength) => {
  const chars = [];

  for (
    let rowId = row;
    rowId < row + wordLength && rowId < wordMap.length;
    rowId++
  ) {
    chars.push(wordMap[rowId][col]);
  }

  return chars.join("");
};

const bottomToTop = (wordMap, { row, col }, wordLength) => {
  const char = [];
  let rowId = row;
  for (let index = 0; index < wordLength && rowId >= 0; index++) {
    char.push(wordMap[rowId][col]);
    rowId--;
  }
  return char.join("");
};

const wordsAtIndex = (wordMap, coordinates, wordLength) => {
  return [
    bottomToTop,
    topToBottomAtIndex,
    leftToRightWordAtIndex,
    rightToLeftWordAtIndex,
  ]
    .map((wordFinder) => wordFinder(wordMap, coordinates, wordLength));
};

const containWordAtPosition = (wordMap, coordinates, word) => {
  return wordsAtIndex(wordMap, coordinates, word.length)
    .some((w) => w === word);
};

const containsWord = (wordMap, word) => {
  for (let row = 0; row < wordMap.length; row++) {
    for (let col = 0; col < wordMap[row].length; col++) {
      const letter = wordMap[row][col];
      if (!word.startsWith(letter)) {
        continue;
      }
      if (containWordAtPosition(wordMap, {row, col}, word)) {
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
  const word = "ABCCED";
  console.log(containsWord(board, "F"));
  console.log(containsWord(board, "FB"));
  console.log(containsWord(board, "FD"));
  console.log(containsWord(board, "FS"));
  console.log(containsWord(board, "FC"));
  console.log(containsWord(board, "AB"));
};

main();
