const chars = {
  A: [
    `      ###  
     ## ## 
    ##   ##
    #######
    ##   ##
    ##   ##
    ##   ##`,
  ],
  B: [
    `######
    ##   ##
    ##   ##
    ######
    ##   ##
    ##   ##
    ######`,
  ],
  // C: [
  //   " ##### ",
  //   "##   ##",
  //   "##     ",
  //   "##     ",
  //   "##     ",
  //   "##   ##",
  //   " ##### ",
  // ],
};

const parseInput = (chars) => {
  return Object.entries(chars).map((item) => item[1]);
};

const shift = (board) => {
  for (let idx = board.length - 1; idx > 0; idx--) {
    const temp = board[idx];
    board[idx] = board[idx - 1];
    board[idx - 1] = temp;
  }
};

const showDisplay = (screen) => {
  const arr = [...screen];
  const x = arr.join("");
  // const y = arr.reverse().join("");
  console.log(x);
};

const main = () => {
  const characters = parseInput(chars);
  const use = [];
  const _characters = characters.flatMap((item) =>
    item.map((item) => `${item}`)
  );
  _characters.forEach((item) => use.push(item));
  console.log(use);
  console.log(use.join(""));

  // const charToDisplay = _characters.map((item) => item.join("\n"));
  // console.log(charToDisplay);
  // charToDisplay.forEach((item) => console.log(item + "\n"));

  // setInterval(() => {
  //   console.clear();
  //   showDisplay(charToDisplay);
  //   shift(charToDisplay);
  // }, 70);
};

main();
