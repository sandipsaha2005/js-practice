const createDisplay = () => {
  return [" ".repeat(40)];
};

const showDisplay = (screen) => {
  const x = screen.join("");
  console.log(x);
  
};

const main = () => {
  const text = "oiendrila";
  const screen = createDisplay();
  let i = 0;
  screen[0] = text;
  setInterval(() => {
    console.clear();
    screen[i] = " ";
    if (i >= 40) i = 0;
    screen[++i] = text;
    showDisplay(screen);
  }, 100);
};
main();
