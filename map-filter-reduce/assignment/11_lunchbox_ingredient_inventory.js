/**
 * Lists of ingredients:
 * 
 * ```
 * ["rice", "lentils"]
 * ["rice"]
 * ["curd", "lentils"]
 * ```
 * 
 * Produce a list of distinct ingredients.
*/

const flatter = (element) => {
  if (!Array.isArray(element)) {
    return element;
  }
  return element.flatMap(flatter);

  return !Array.isArray(element) ? element : element.flatMap(flatter);
}

const createDistinctIngredients = (array) => {
  return array.flatMap(flatter).filter((element, index, array) => array.indexOf(element) === index);
}
const ingredients = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];

console.log(createDistinctIngredients(ingredients));