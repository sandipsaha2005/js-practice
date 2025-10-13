function isArray(array) {
  return typeof array === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function indexOf(array, target, index, indexArr) {
  if (index >= array.length) {
    return [-1];
  }

  if (array[index] == target) {
    indexArr.push(index);
    return indexArr;
  }

  if (isArray(array[index])) {
    indexArr.push(index);
    return indexOf(array[index], target, 0, indexArr);
  }

  if (!isArray(array[index]) && array[index] !== target) {
    return indexOf(array, target, index + 1, indexArr);
  }

}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
   | Inputs  : ${inputs}
   | Actual  : ${actualOutput}
   | Expected: ${expectedOutput}
   -------`;
}

function testCode(description, array, target, expectedOutput) {
  const actualOutput = indexOf(array, target, 0, []);
  const isEqual = areDeepEqual(actualOutput, expectedOutput);
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${array} ${target}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function main() {
  console.log('\n Check both array is deep equal or not\n');
  testCode("For notmal nested array", [1, 2, [3, 4, 5, [6, 7]]], 7, [2, 3, 1]);
  testCode("For notmal nested array", [1, 2, [3, 4, 5]], 3, [2, 0]);
  testCode("For not nested array", [1, 2, 3, 4, 5], 3, [2]);
  testCode("For target not present", [1, 2, [3, 4, 5]], 10, [-1]);
  console.log();
}

main();