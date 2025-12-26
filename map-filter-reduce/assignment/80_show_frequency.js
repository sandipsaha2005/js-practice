const disticnt = (value, element) => {
  value[element] ? value[element] = value[element] + 1 : value[element] = 1;
  return value;
};

const countFrequency = (array) => {
  return array.reduce(disticnt, []);
};

const colors = ["red", "blue", "red", "green", "green", "green", "red", "blue"];
console.log(countFrequency(colors));



const frequency = (arr, element) => {
  const currElement = arr.find((x) => x[0] === element);
  if (!currElement) {
    arr.push([element, 1]);
    return arr;
  }

  currElement[1] += 1;
  return arr;
};

console.log(colors.reduce(frequency, []));



const flatter = (element) => {
  if (!Array.isArray(element)) {
    return element;
  }

  return element.flatMap(flatter);
};

const flat = (array) => {
  return array.flatMap(flatter);
};

const nested = [1, [2, [3, [4, [5, [6]]]]]];
console.log(flat(nested));



const flatterWithFlatMap = (array, element) => {
  if (!Array.isArray(element)) {
    array.push(element);
    return array;
  }

  return element.reduce(flatterWithFlatMap, array);
};

const flatWithOutFlatMap = (array) => {
  return array.reduce(flatterWithFlatMap, []);
};

console.log(flatWithOutFlatMap(nested));