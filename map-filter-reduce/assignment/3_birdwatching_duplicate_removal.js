/**
 * A birdwatcher notes species seen during a morning walk:
 * 
 * ```
 * ["sparrow", "crow", "sparrow", "eagle", "crow"]
 * ```
 * 
 * Create a list of the species without repeats, preserving the order first seen.
 */

const unique = (inital, element) => {
  if (!inital.includes(element)) {
    inital.push(element);
  }

  return inital;
}

const filterCategory = (array, initialValue) => {
  return array.reduce(unique, initialValue)
}

const filterCategory2 = (array) => {
  return array.filter((element, index, array) => array.indexOf(element) === index);
}

const arr = ["sparrow", "crow", "sparrow", "eagle", "crow", "crow"];
console.log(filterCategory2(arr, []));
