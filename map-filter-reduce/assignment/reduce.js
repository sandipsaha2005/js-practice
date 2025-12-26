const reduce = (predicate, initialValue, array) => {
  let result = initialValue;

  for (let index = 0; index < array.length; index++) {
    result = predicate(result, array[index], index, array);

  }
  return result;
}

const arr = [1, 2, 3, 5, 1, 1];
const check = (value, element, index, array) => {
  return element === 1 ? value + 1 : value;
}
// console.log(reduce(check, 0, arr));


// console.log(arr.reduce(check, 0));