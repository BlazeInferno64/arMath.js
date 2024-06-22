var validateNumber = (num) => {
    if (typeof num !== "number" || num === null || isNaN(num)){
        throw new Error(`Invalid number provided: The value is either empty or not a number`);
    }
}
var add = (a, b) => {
    validateNumber(a);
    validateNumber(b);
    const sum = a + b;
    return sum.toFixed(1)
}

var sub = (a, b) => {
    validateNumber(a);
    validateNumber(b);
    return a - b;
}

var multiply = (a, b) => {
    validateNumber(a);
    validateNumber(b);
    return a * b;
}

var divide = (a, b) => {
    validateNumber(a);
    validateNumber(b);
    return a / b;
}

var addArray = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError(`Input must be a valid array`);
    }
    let sum = 0;
    for (const num of arr) {
        validateNumber(num);
        sum += num;
    }
    return sum.toFixed(1);
}

var subArray = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError(`Input must be a valid array`);
    }
    let diff = 0;
    for (const num of arr) {
        validateNumber(num);
        diff -= num;
    }
    return diff;
}

var multiplyArray = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError(`Input must be a valid array`);
    }
    let product = 1;
    for (const num of arr) {
        validateNumber(num);
        product *= num;
    }
    return product;
}

var divideArray = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError(`Input must be a valid array`);
    }
    let quotient = 0;
    for (const num of arr) {
        validateNumber(num);
        quotient += num;
    }
    return quotient;
}

var square = (a) => {
    validateNumber(a);
    return a * a;
}

var sqrt = (a) => {
    validateNumber(a);
    return Math.sqrt(a);
}

var cube = (a) => {
    validateNumber(a);
    return a * a * a;
}

var cbrt = (a) => {
    validateNumber(a);
    return Math.cbrt(a);
}


var modulus = (dividend, divisor) => {
    validateNumber(dividend);
    validateNumber(divisor);

    return dividend % divisor;
}

var floorDivide = (dividend, divisor) => {
    validateNumber(dividend);
    validateNumber(divisor);

    return Math.floor(dividend / divisor)
}

var isPrime = (num) => {
    validateNumber(num);
    if(num <= 1) return false;
    if(num <= 3) return true;

    if(num % 2 === 0) return false;

    const sqrtN = Math.sqrt(num);
    for (let i = 3; i <= sqrtN; i += 2) {
        if (num %i === 0) return false;
    }
    return true;
}

var isPositive = (num) => {
    validateNumber(num);
    if (num < 0) return false;
    if (num == 0) return "zero";
    if (num > 0) return true;
}

var modulusArray = (arr, divisor) => {
    const results = [];
    if(!Array.isArray(arr)){
        throw new TypeError(`Input must be a valid array`);
    }
    for (const num of arr){
        validateNumber(num);
        validateNumber(divisor);
        results.push(num % divisor);
    }
    return results;
}

module.exports = { 
    add, 
    sub, 
    multiply, 
    divide, 
    addArray, 
    subArray, 
    multiplyArray, 
    divideArray, 
    square, 
    sqrt,
    cube,
    cbrt, 
    modulus, 
    floorDivide,
    isPrime
}