const obj = {
  first: "sandip",
  last: "saha",
  getName: function () {
    return this.first + this.last;
  },
  innerObj: {
    first: "sagnik",
    last: "Ghosh",
    getName: function () {
      return this.first + this.last;
    },
  },
};

const isOpening = (ch) => "({[".includes(ch);
const isClosing = (ch) => ")]}".includes(ch);
const isFirstBraceBalanced = (ch, top) => ch === ")" && top === "(";
const isCurlyBraceBalanced = (ch, top) => ch === "}" && top === "{";
const isSquareBraceBalanced = (ch, top) => ch === "]" && top === "[";

const isBalanced = (brackets) => {
  const stack = [];
  for (const element of brackets) {
    if (isOpening(element)) {
      stack.push(element);
    }

    const top = stack[stack.length - 1];
    if (
      isFirstBraceBalanced(element, top) ||
      isCurlyBraceBalanced(element, top) ||
      isSquareBraceBalanced(element, top)
    ) {
      stack.pop();
    }

    if (
      (element === ")" && top !== "(") || (element === "}" && top !== "{") ||
      (element === "]" && top !== "[")
    ) {
      return false;
    }
  }
  console.log(stack);

  return stack.length === 0;
};

const parenthesisMatching = (string) => {
  const brackets = [...string].filter((ch) => (isOpening(ch) || isClosing(ch)));
  return isBalanced(brackets);
};

console.log(parenthesisMatching("{(dd{dsdfd})}"));

