// Function 

function addTwoNumber(a, b) {
    return a + b;
}

function multiplyTwoNumber(a, b) {
    return a * b;
} 

function multiplyByCentury(a) {
    return a * 100;
}

function doSomething(a, b) {
    const sum = addTwoNumber(a, b);
    const multiplication = multiplyTwoNumber(addTwoNumber(a, b), addTwoNumber(a, b));
    return sum + multiplication;
}

console.log(multiplyByCentury(10));
