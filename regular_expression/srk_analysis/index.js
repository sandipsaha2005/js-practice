const string = "Hi, do you know your abc's now abc";
const nNoOfB = /ab+c/g;
const listAllWords = /\b\w+\b/g;
const secondLast = /\w+(?= \w*$)/;
console.log(...string.match(secondLast));
