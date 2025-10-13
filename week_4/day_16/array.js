function copyArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = array[index];
  }
  return newArray;
  // return array
}

const array = [1, 2, "string"];
const copy = copyArray(array);

console.log(copy.reverse());
console.log(array);