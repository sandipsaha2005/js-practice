




function formatText(inputs, actualOutput, expectedOutput) {
  return `
   | Inputs  : ${inputs}
   | Actual  : ${actualOutput}
   | Expected: ${expectedOutput}
   -------`;
}

function testCode(description, firstTerm, difference, nthTerm, expectedOutput) {
  const actualOutput = sumOfGP(firstTerm, difference, nthTerm);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${firstTerm} ${difference} ${nthTerm}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function main() {
  console.log('\nFind GP Sum\n');
  testCode("For d = 0", 0, 0, 0, 0);
  testCode("For d = 1", 3, 2, 3, 21);
  console.log();
}

main();