/*
    case 'filled-rectangle':
    case 'hollow-rectangle':
    case 'alternating-rectangle':
    case 'spaced-alternating-rectangle':
    case 'triangle':                   // single parameter
    case 'right-aligned-triangle':     // single parameter
    case 'diamond':                    // single parameter
*/

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }

  return "";
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   | Inputs  : ${inputs}
   | Actual  : ${actualOutput}
   | Expected: ${expectedOutput}
   -------`;
}

function testCode(description, array1, array2, expectedOutput) {
  const actualOutput = deepEqual(array1, array2);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${array1} ${array2}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function testCaseForFilledTriangle() {
  console.log();
  
}
function main() {
  console.log('\n Check both array is deep equal or not\n');
  testCode("For empty array", [], [], true);
  console.log();
}

main();