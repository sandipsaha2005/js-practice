function isVowel(character) {
  return character === "a" || character === "e" || character === "i" || character === "o" || character === "u";
}

function vowelToAdd(string, index, previousTrack) {
  return isVowel(string[index]) && previousTrack !== 0;
}

function vowelToignore(string, index, previousTrack) {
  return isVowel(string[index]) && previousTrack === 0;
}

function consonentToAdd(string, index, previousTrack) {
  return !isVowel(string[index]) && previousTrack !== 1
}

function consonentToIgnore(string, index, previousTrack) {
  return !isVowel(string[index]) && previousTrack === 1;
}

function stringSplitting(string) {
  let newWords = "";
  let leftOutCharacters = "";
  let previousTrack = -1; // 0 means vowel 1 means consonent

  for (let index = 0; index < string.length; index++) {
    if (vowelToAdd(string, index, previousTrack)) {
      newWords += string[index];
      previousTrack = 0;
    } else if (vowelToignore(string, index, previousTrack)) {
      leftOutCharacters += string[index];
    }

    if (consonentToAdd(string, index, previousTrack)) {
      newWords += string[index];
      previousTrack = 1;
    } else if (consonentToIgnore(string, index, previousTrack)) {
      leftOutCharacters += string[index];
    }
  }

  if (leftOutCharacters === "") {
    return newWords;
  }
  return newWords + "," + stringSplitting(leftOutCharacters);
}

function formatText(actualOutput, expectedOutput) {
  const RED_COLOR = "\x1b[31m";
  const GREEN_COLOR = "\x1b[32m";
  const RESET_COLOR = "\x1b[0m";

  let symbol = "❌"
  let color = RED_COLOR;
  const isEqual = actualOutput === expectedOutput;

  if (isEqual) {
    color = GREEN_COLOR;
    symbol = "✅";
  }

  const expectedValue = GREEN_COLOR + expectedOutput + RESET_COLOR
  const expectedMessage = "  Expected ->[ " + expectedValue + " ]";

  const outputValue = color + actualOutput + RESET_COLOR;
  const OutputMessage = "  Output->[ " + outputValue + ' ]';

  return expectedMessage + OutputMessage + symbol;
}

function composeMessage(originalString, actualOutput, expectedOutput) {
  const inputMessge = "String->[ " + originalString + " ]";
  const message = formatText(actualOutput, expectedOutput);

  return inputMessge + message;
}

function testCode(string, expectedOutput) {
  const actualOutput = stringSplitting(string);
  const message = composeMessage(string, actualOutput, expectedOutput);
  console.log(message);
}

function main() {
  console.log('\nSplitting vower and consonents\n');
  testCode("apple", "ape,p,l");
  testCode("there", "tere,h");
  testCode("hello", "helo,l");
  testCode("abyss", "ab,y,s,s");
  testCode("this", "tis,h");
  testCode("", "");
  testCode("cat", "cat");
  testCode("boat", "bot,a");
  testCode("applee", "ape,pe,l");
  testCode("rhythm", "r,h,y,t,h,m");
  testCode("programming", "pogamin,r,r,m,g");
  testCode("beautiful", "betiful,a,u");
  testCode("sequoia", "sequ,o,i,a");
  testCode("strength", "sen,t,r,g,t,h");
  testCode("education", "educatin,o");
  testCode("aeiou", "a,e,i,o,u");
  testCode("zzz", "z,z,z");
  testCode("mississippi", "misisipi,s,s,p");
  testCode("onomatopoeia", "onomatopo,e,i,a");
  testCode("aaabbb", "ab,ab,ab");
  console.log();
}

main();