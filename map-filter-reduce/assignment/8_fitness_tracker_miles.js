/**
 * Runner logs:
 * 
 * ```
 * [2, 3, 2]
 * [4]
 * [1, 1]
 * ```
 * 
 * Find the total miles run.
 */

const totalRun = (array, initialValue) => {
  return array.reduce((value, element) => value + element, initialValue);
}

console.log(totalRun([2, 3, 2], 0));
console.log(totalRun([4], 0));