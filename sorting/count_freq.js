function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function frequency(array) {
  const _frequency = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (_frequency[element]) {
      _frequency[element].count = _frequency[element].count + 1;
    }

    if (!_frequency[element]) {
      _frequency[element] = { count: 1 };
    }

  }
  return _frequency;
}

function fingGreatest(frequency,array) {
  console.log(array);
  
  console.log(Object.entries(frequency));
}

const array = [1, 1, 1, 2, 3, 5, 5, 3];
const _frequency = frequency(array);
fingGreatest(_frequency,array);

