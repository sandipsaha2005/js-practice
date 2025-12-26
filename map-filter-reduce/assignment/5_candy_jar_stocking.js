/**
 * A store logs candy refills like this:
 * 
 * ```
 * [5, 3]
 * [2]
 * [4, 1]
 * ```
 * 
 * Find the total number of candies added.
 */
const mapFlat = (element) => {
  return !Array.isArray(element) ? element : element.flatMap(mapFlat);
}

const countRefills = (array) => {
  return array.flatMap(mapFlat).reduce((count, element) => count + element , 0);
}

const refills = [[5, 3],[2],[4, 6]];

console.log(countRefills(refills));