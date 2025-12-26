/**
 * Origami students make cranes in sessions:
 * 
 * ```
 * [3, 2]
 * [1]
 * [4]
 * ```
 * 
 * Compute the total cranes.
 */

const countTotal = (array, initialValue) => {
  return array.reduce((value, element) => value + element, initialValue);
}

console.log(countTotal([1, 2, 3],0));
