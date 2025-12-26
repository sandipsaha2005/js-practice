/**
 * Several temperature sheets:
 * 
 * ```
 * [22, 23]
 * [25, 24, 22]
 * [29]
 * ```
 * 
 * Check if **every** recorded temperature is below 32.
 */

const checkAll = (array, target) => {
  return array.every((element) => element < target);

}

console.log(checkAll([22, 23], 32));
console.log(checkAll([25, 24, 22], 32));
console.log(checkAll([29, 32], 32));