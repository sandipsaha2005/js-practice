/**
 * Animal sightings:
 * 
 * ```
 * ["deer", "deer", "rabbit", "deer"]
 * ```
 * 
 * Count how many times “deer” was seen.
 */
const count = (array, target, initialValue) => {
  return array.reduce((value, element) => element === target ? value + 1 : value, initialValue);
}

const animals = ["deer", "deer", "rabbit", "deer"];

console.log(count(animals, "deer", 0));