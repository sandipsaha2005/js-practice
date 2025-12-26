/**
 * Measurements:
 * 
 * ```
 * [3, 4]
 * [5, 2]
 * [1]
 * ```
 * 
 * Check if all values are positive.
 */

const checkAll = (array) => {
  return array.every((element) => element > 0);
}

console.log(checkAll([1,2,3]));