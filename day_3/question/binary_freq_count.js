const number = 21; //10101
const givenSubString = "101"
const divider = 2;
let binaryString = "";


// converting to binary
while ( number > 0 ){
    let remainder = number % divider
    binaryString = remainder + binaryString;
    if (remainder == 1 ) {
        number = (number / 2) -.5;
    } else {
        number = number / 2;
    }    
}

// console.log(binaryString);
let frequency = 0;

for ( let i = 0; i < binaryString.length - (givenSub.length -1) ;i++) {
    let sub = "";
    for( let j = i; j < i + givenSub.length ; j++){
        sub += binaryString[j]
    }    
    if( sub === givenSub ){
        frequency++;
    }
}
console.log(frequency);

