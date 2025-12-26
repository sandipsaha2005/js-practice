/**
 * Singers produce sequences:
 * 
 * ```
 * ["la", "la"]
 * ["mi"]
 * ["so", "la"]
 * ```
 * 
 * Check whether any group sang `"so"`.
 */

const isSung = (array, target) => {
  return array.map((element) => element.some((element) => element === target)).some((element) => element === true);
}
const groups = [["la", "la"],["mi"],["so", "la"]];

console.log(isSung(groups, "so"));
