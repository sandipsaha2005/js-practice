const merge = function (array, start, mid, end) {
  const leftArr = array.slice(start, mid + 1);
  const rightArr = array.slice(mid + 1, end + 1);

  let i = 0;
  let j = 0;
  let index = start;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      array[index] = leftArr[i];
      i++;
    } else {
      array[index] = rightArr[j];
      j++;
    }
    index++;
  }

  while (i < leftArr.length) {
    array[index] = leftArr[i];
    index++;
    i++;
  }

  while (j < rightArr.length) {
    array[index] = rightArr[j];
    index++;
    j++;
  }
};

const mergeSort = function (array, low, high) {
  if (low >= high) {
    return;
  }

  const mid = Math.floor((low + high) / 2);
  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);
  merge(array, low, mid, high);
};

const arrayNumber = [2, 4, 1, 3, 1, 1];
mergeSort(arrayNumber, 0, arrayNumber.length - 1);
console.log(arrayNumber);
