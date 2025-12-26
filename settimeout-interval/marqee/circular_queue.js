const queue = ["h", "i", " ", " ", " "];

const shift = () => {
  let i = board.length - 1;
  while (i > 0) {
    const temp = board[i];
    board[i] = board[i - 1];
    board[i - 1] = temp;
    i--;
  }
};

shift();
shift();
shift();
shift();
shift();
console.log(board);
