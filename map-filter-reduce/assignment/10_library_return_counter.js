/**
 * Books returned:
 * 
 * ```
 * ["Dune", "Dune", "Foundation", "Dune"]
 * ```
 * 
 * Count how many times “Dune” was returned.
 */

const countBooks = (array, initialValue, target) => {
  return array.reduce((value, element) => element === target ? value + 1 : value, initialValue);
}
const books = ["Dune", "Dune", "Foundation", "Dune"];
console.log(countBooks(books, 0, "Dune"));
