function findUnderScore(character) {
  return character === "_"; // 97 - a 65
}

function findIndex(character, index, list) {
  if (index === list.length || character === list[index]) {
    return index;
  }

  return findIndex(character, index + 1, list);
}

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
console.log(findIndex("3", 0, lowerCaseLetters));
