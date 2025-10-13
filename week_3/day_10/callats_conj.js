function isEven(number) {
  return number % 2 === 0;
}

function calletsConjecture(number) {
  if (number === 0) {
    return 0;
  }

  let result = number;
  while (result !== 1) {
    result = isEven(result) ? result / 2 : (3 * result) + 1;
  }
  return result;
}

function testCode(start, end) {
  for (let index = start; index < end; index++) {
    const result = calletsConjecture(index);
    console.log(`${index} = ${result}`);
  }

}

testCode(0, 15);