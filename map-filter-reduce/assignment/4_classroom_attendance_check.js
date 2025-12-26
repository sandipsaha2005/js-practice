/**
 * A class records names of students present for each period:
 * 
 * ```
 * ["Asha", "Ravi", "Neel"]
 * ["Ravi"]
 * ["Asha", "Meera"]
 * ```
 * 
 * Determine which distinct students attended at least once.
 */
const mapFlat = (element) => {
  return !Array.isArray(element) ? element : element.flatMap(mapFlat);
}

const determineDistinct = (array) => {
  return array.flatMap(mapFlat).filter((element, index, array) => array.indexOf(element) === index);
}

const records = [["Asha", "Ravi", "Neel"],["Ravi",["Meera", "Sandip"]],[[[[[["Sandip"],["Lovekush"]]]]]],["Asha", "Meera"]];

console.log(determineDistinct(records));
