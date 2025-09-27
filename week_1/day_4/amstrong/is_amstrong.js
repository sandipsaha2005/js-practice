const number = 231;   

let strCopyNumber = number + ""; 
let result = 0;
for(let counter = 0; counter < strCopyNumber.length; counter++) {
    const eachNumber = strCopyNumber[counter] ** strCopyNumber.length; // '2' ** 2
    result =result + eachNumber;
}

const text = result === number ? " is a Amstrong" : " not a Amstrong"
console.log(number + text);
