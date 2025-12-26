/**
 * A stargazing club logs visible constellations from each night:
 * 
 * ```
 * ["Orion", "Leo"]
 * ["Taurus"]
 * ["Orion", "Gemini"]
 * ```
 * 
 * Combine everyone’s observations into one list of all constellations spotted.
 */

const mapFlat = (element) => {
  return !Array.isArray(element) ? element : element.flatMap(mapFlat);
}

const constellations = [["Orion", "Leo"], ["Taurus"], [["Orion", [["cucumber"]]], "Gemini"]];
console.log(constellations.flatMap(mapFlat));