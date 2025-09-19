const inputNumber = 9;

// 2^2 + 4^2
// 1^3 + 2^3 + 3^3
let noOfDigit = 0;
let copyOfInputNumber = inputNumber;

while (copyOfInputNumber >= 1) {
    copyOfInputNumber = copyOfInputNumber / 10;    
    noOfDigit++;
}

for(let counter = 0; counter < noOfDigit; counter++){

}


// console.log(inputNumber + " is a amstrong number");
