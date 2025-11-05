function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomArray(requiredLen) {
  const arr = [];
  for (let index = 0; index < requiredLen; index++) {
    arr.push(randomNumber());
  }
  return arr;
}

console.log(randomArray(10));
