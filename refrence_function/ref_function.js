const compare = function (a, b, orderBy) {
  const value1 = typeof a === "string" ? a.length : a;
  const value2 = typeof b === "string" ? b.length : b;
  return orderBy(value1, value2);
}

const bubbleSort = function (array, order) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[i], array[j], order)) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

const assending = function (a, b) {
  return a > b;
}

const descending = function (a, b) {
  return a < b;
}

const main = function () {
  const arrayNumber = [2, 4, 6, 1, 9, 4];
  const arrayString = ["a", "ab", "aaabb", "abc", 6, 2, 9, 4];

  bubbleSort(arrayNumber, assending);
  console.log(arrayNumber);
  bubbleSort(arrayNumber, descending);
  console.log(arrayNumber);

  bubbleSort(arrayString, assending);
  console.log(arrayString);
}

main();