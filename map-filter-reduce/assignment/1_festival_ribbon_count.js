/**
 * A craft booth cuts ribbons of different colors throughout the day:
 * 
 * ```
 * ["red", "blue", "red", "green", "red", "blue"]
 * ```
 * 
 * They want to know how many **blue** ribbons were cut.
 * 
 * reduce function takes callback and inital value
 * and the reducer function takes indialValue, currentValue, index, array
**/

const countElement = (array, indialValue, target) => {

  return array.reduce((value, element, index, array) => {
    return element === target ? value + 1 : value
    // return array[index] === target ? value + 1 : value
  }, indialValue);
}

const printHeading = function (text) {
  console.log(`\n ${text}`);
  console.log(` ${"_".repeat(text.length)} \n`);
}

const formatText = function (inputs, actualOutput, expectedOutput) {
  return `
   | Inputs  : ${inputs}
   | Actual  : ${actualOutput}
   | Expected: ${expectedOutput}
   -------`;
}

const testCodeTemplate = function (description, input, initialValue, reducer, expectedOutput) {
  const actualOutput = countElement(input, initialValue, reducer);

  const isEqual = actualOutput === expectedOutput;

  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const _input = `[ ${input} ]`;
    const details = formatText(_input, actualOutput, expectedOutput);
    console.log(details);
  }
}

const testCode = (array,) => {
  printHeading("A craft booth cuts ribbons of different colors throughout the day");
  testCodeTemplate("For given input", ["red", "blue", "red", "green", "red", "blue"], 0, "blue", 2)
  testCodeTemplate("For given input", [1, 2, 4, 5, 6, 78, 2], 0, 2, 2);
}

const main = () => {
  testCode();
}

main();