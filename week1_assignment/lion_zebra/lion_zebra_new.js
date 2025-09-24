const test1= `L  Z   Z L    Z`
const test2 = `LZ`
const test3 = `Z L`
const test4 = `L     Z`
const test5 = `L     L`
const test6 = `Z   Z   Z`
const test7 = `L  ZL Z`
const test8 = `Z `
const test9 = `LZL`
const test10 = `ZLZ`
const test11 = `Z L    `

const givenStr = test11;
let minLenght = 100;
let previous ='';
let previousIdx = -1;
console.log("");

for(let i =0; i < givenStr.length; i++) {
    let distance = 100;
    if(givenStr[i] === "L" ) {
        if(previous !== givenStr[i] && previous !== '') {
            const difference = previousIdx < i ? i - previousIdx : previousIdx - i;
            distance = distance > difference ? difference -1 : distance;            
        }
        previous = "L"
        previousIdx = i;
        
    }
    if(givenStr[i] === "Z") {
        let difference = 100;
        if(previous !== givenStr[i] && previous !== ''){
            const difference = previousIdx < i ? i - previousIdx : previousIdx - i;
            distance = distance > difference ? difference -1 : distance;            
        }
        previous = "Z";        
        previousIdx = i;
    }
    minLenght = minLenght < distance ? minLenght : distance;
}
const finalResult = minLenght === 100 ? -1 : minLenght;
console.log(finalResult + " is the shortest length");

