let number = 65; //10101
const givenSubString = "00"


const divider = 2;
let binaryString = "";
while ( number > 0 ){
    let remainder = number % divider;
    binaryString = remainder + binaryString;
    if (remainder == 1 ) {
        number = (number / 2) -.5;
    } else {
        number = number / 2;
    }    
}


let frequency = 0;

for ( let i = 0; i < binaryString.length - (givenSubString.length -1) ;i++) {
    let sub = "";
    for( let j = i; j < i + givenSubString.length ; j++){
        sub += binaryString[j]
    }    
    if( sub === givenSubString ){
        frequency++;
    }
}


console.log(frequency);
