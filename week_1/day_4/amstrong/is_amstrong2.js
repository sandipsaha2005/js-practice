const input = 1;

let copyOfInput = input;
let noOfDigit = 0;
while (copyOfInput >= 1) {
    copyOfInput = copyOfInput / 10;    
    noOfDigit++;
}

let secondCopyOfInput = input;
let sumOfDigits = 0;
while (secondCopyOfInput !== 0) {
    let eachNumber = secondCopyOfInput % 10;
    secondCopyOfInput = secondCopyOfInput - eachNumber;
    secondCopyOfInput = secondCopyOfInput / 10;
    eachNumber = eachNumber ** noOfDigit;
    sumOfDigits += eachNumber;
}

const text = input === sumOfDigits ? " is Amstrong" : " is not Amstrong";
console.log(input + text);


