const board = [..."  ".repeat(30)];
const board1 = [..."  ".repeat(30)];
const board2 = [..."  ".repeat(30)];
const board3 = [..."  ".repeat(30)];
const board4 = [..."  ".repeat(30)];

const shift = (board) => {
  for (let idx = board.length - 1; idx > 0; idx--) {
    const temp = board[idx];
    board[idx] = board[idx - 1];
    board[idx - 1] = temp;
  }
};

const reverseShift = (board) => {
  for (let idx = 0; idx < board.length - 1; idx++) {
    const temp = board[idx];
    board[idx] = board[idx + 1];
    board[idx + 1] = temp;
  }
};

const showDisplay = (screen) => {
  const arr = [...screen];
  const x = arr.join("");
  const y = arr.reverse().join("");
  console.log(x + y);
};

const addwordInBoard = (arr, word) => {
  for (let index = 0; index < word.length; index++) {
    arr[index] = word[index];
  }
};

const main = () => {
  const text = "👮🏻‍♀️👮🏻‍♂️ 🦹🏼‍♂️";
  const text1 = "i dont know";
  const text2 = "step-11";
  const text3 = "I'm Back";
  const text4 = "I'm gone";

  addwordInBoard(board1, text1);
  addwordInBoard(board, text);
  addwordInBoard(board2, text2);
  addwordInBoard(board3, text3);
  addwordInBoard(board4, text4);

  setInterval(() => {
    shift(board);
  }, 70);

  setInterval(() => {
    shift(board1);
  }, 90);

  setInterval(() => {
    shift(board2);
  }, 50);

  setInterval(() => {
    reverseShift(board3);
  }, 100);

  setInterval(() => {
    reverseShift(board4);
  }, 100);

  setInterval(() => {
    console.clear();
    // showDisplay(board);
    showDisplay(board4);
    showDisplay(board1);
    showDisplay(board2);
    showDisplay(board3);
  }, 100);
};

main();
