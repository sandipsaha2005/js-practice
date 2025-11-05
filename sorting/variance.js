function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function medianForOdd(array) {
  const mid = Math.floor(array.length / 2);
  return array[mid];
}

function medianForEven(array) {
  const mid1 = Math.floor(array.length / 2);
  const mid2 = Math.floor(array.length / 2) + 1;
  return (array[mid1] + array[mid2]) / 2;
}

function median(array) {
  sort(array);
  // const isOdd = (array.length % 2) === 1;
  // return isOdd ? medianForOdd(array) : medianForEven(array);

  return array[Math.floor(array.length /2)]
}

function mean(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return [sum / array.length, sum];
}

function sd(array) {
  const _mean = mean(array);

  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const difference = _mean[0] - array[index];
    sum += difference * difference;
  }

  return Math.sqrt(sum / array.length);
}

function main() {
  const runs = [31, 62, 7, 59, 54, 67, 43, 22, 52, 1, 73, 12, 41, 63, 70, 42];

  const _median = median(runs);
  const _mean = mean(runs);
  const _sd = sd(runs);
  console.log(`the median is = ${_median}`);
  console.log(`the runs is = ${_mean[1]}`);
  console.log(`the average is = ${_mean[0]}`);
  console.log(`the sd is = ${_sd}`);
}

main();
Math.random()