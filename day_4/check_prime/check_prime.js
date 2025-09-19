const input = 144;

let isPrime = true;
let divider = 2;

while ( isPrime && divider < input) {
    if(input % divider === 0) {        
        isPrime = false;
    }
    divider++;
}

let res = isPrime === true ? " is prime" : " not prime"
console.log(input + res);
