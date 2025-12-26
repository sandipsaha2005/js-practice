/**
 * Choir groups practice with sequences:
 * 
 * ```
 * ["mi", "fa", "so"]
 * ["do", "mi"]
 * ["fa"]
 * ```
 * 
 * Check whether **any** group sang `"do"`.
 */

const count = (array, target) => {
  return array.some((element) => element.some((element) => element === target));
}

const groups = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];

console.log(count(groups, "do"));