const quickSort = function(array, start, end) {

  const pivot = array[start];
  

  quickSort(array, start, pivot);
  quickSort(array, pivot + 1, end);
}


const arrayNumber = [2, 4, 1, 3, 1, 1];
quickSort(arrayNumber, 0, arrayNumber.length);