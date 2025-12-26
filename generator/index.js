function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

function* infinity() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const generatorInstance = generator();

let isDone = false;

while (isDone !== true) {
  const { value, done } = generatorInstance.next();
  console.log(value);
  isDone = done;
}
