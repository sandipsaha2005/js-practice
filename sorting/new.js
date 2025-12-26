const arr = [0,1,2,4,5,7]; // ["0->2","4->5","7"]

const extractContiniousElements = (arr) => {
  const ranges = [];
  let range = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1] + 1 && index !== 0) {
      ranges.push(range);
      range = [];
    }
    range.push(arr[index]);
  }

  ranges.push(range);
  return ranges;
};

const makeString = (element) => {
  if(element.length === 1) {
    return `${element[0]}`;
  }

  return `${element[0]}->${element[element.length - 1]}`;
}

const strings = (array, element) => {
  const string = makeString(element);
  array.push(string);
  return array;
};

const summaryRange = (arr) => {
  const ranges = extractContiniousElements(arr);
  return ranges.reduce(strings, []);
};

console.log(summaryRange(arr));
