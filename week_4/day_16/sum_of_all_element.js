function sumOfAllElement(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}

function largestInArray(array) {
  let largest = array[0];

  for (let index = 0; index < array.length; index++) {
    largest = largest > array[index] ? largest : array[index];
  }

  return largest;
}

function rotateArray(array) {
  array.push(array.shift());
  return array;
}

let arr = [1,2,3];
console.log(rotateArray(arr));
 
