const mymap = function (mapper) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    newArr.push(mapper(element));
  }
  return newArr;
};

const bindWithValue = (args) => {
  return mymap.bind(args);
};

console.log(bindWithValue([1, 2, 3])((x) => x));

