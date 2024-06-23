# arMath.js
arMath.js stands for Arithmetic Math.js, which is a simple library made in JavaScript to perform basic mathematical operations

Check the npm package here
https://www.npmjs.com/package/armath.js

# Setup
First install the package:

```
npm i armath.js
```

Then require the package in your project file as belows

```javascript
const arMath = require("armath.js");
```

# Info
arMath.js provides you with following capbilities -
1. Addition of two numbers
2. Subtraction of two numbers
3. Multiplication of two numbers
4. Division of two numbers
5. Addition of array of numbers
6. Subtraction of array of numbers
7. Multiplication of array of numbers
8. Division of array of numbers
9. Squaring of a number
10. Squareroot of a number
11. Cubing of a number
12. Cuberoot of a number
13. Modulus of a number
14. Floor Division of a number
15. Prime number checker

Let me show you a few examples
# Addition 
Using arMath.add() function we will be adding 1 and 2,
It will throw an error if the input provided isn't a number!

```javascript
const arMath = require("armath.js");

const output = arMath.add(1,2);
console.log(output);
```

And in the console we can see the results as below

```javascript
3.0
```

Like this you can use arMath.sub(), arMath.multiply(), arMath.divide() as your desired requirement

# Addition of an array of numbers
arMath.addArray() is the function we will require for adding the arrays

let me show you a simple example 

```javascript
const arMath = require("armath.js");

const numbers = [0,1,2,3,4,5,6,7,8,9,10]
console.log(arMath.addArray(numbers))
```

Output will be as below 

```javascript
55.0
```

Similarly we can use the other functions too - arMath.addArray(), arMath.subArray(), arMath.multiplyArray(), arMath.divideArray(),
You just have to pass an array to the functions like the above scenario

# Modulus of two numbers

To find the modulus of two numbers
use `arMath.modulus(a, b)` , where a & b are any two numbers
You have to pass in two parameters here, i.e, then dividend and the divisor
Let me show you the example:

```javascript
const arMath = require("armath.js");

let output = arMath.modulus(2,4);
console.log(output);
```

Output will be as below 

```javascript
2
```

# Modulus of an array of numbers
To find the modulus of an array of numbers use `arMath.modulusArray(array, num)`, where num is any number and array should be proper array of numbers or else it will throw an error

Let me show you a basic example

```javascript
const arMath = require("armath.js");

const array = [1,2,3,4,5]; // An array of numbers
const number = 2 // Any number of your choice
console.log(arMath.modulusArray(array, number));
```

Output

```javascript
[ 1, 0, 1, 0, 1 ]
```

# Prime checking
To check if its a prime or not you need to use the `isPrime(num)` function and pass in any number in place of num

Example

```javascript
const arMath = require("armath.js");

console.log(arMath.isPrime(2));
```

Output will be 

```javascript
true
```

If we pass in any composite number, then output will be 

```javascript
false
```

# Positive checking
To check if a number is positive or not, use `isPositive(num)` function and pass in a number
It will show true if its positive, zero in case of 0 and false in case of negative

Example

```javascript
const arMath = require("armath.js");

console.log(arMath.isPositive(3));
```

Output

```javascript
true
```

# Square & Square Root of a number

```javascript
const arMath = require("armath.js");

const num1 = 5; // Any number of your choice
const num2 = 49;
console.log(arMath.square(num1)); // Output will be 25
console.log(arMath.sqrt(num2)); // Output will be 7
```

We can use similar approach for cube/cuberoot ,i.e, `arMath.cube(a)` & `arMath.cbrt(a)`, where a is any number

# Floor Division

To floor divide you need to use `arMath.floorDivide`

Example

```javascript
const arMath = require("armath.js");

console.log(arMath.floorDivide(2,4)); // Replace with any number of your choice
```

It will give you the result of floor division as the output ,i.e, 0

# Issues/Bugs/Feature requests

For any bugs/issues/feature requests feel free to open up an issue here at https://github.com/blazeinferno64/arMath.js

`Thanks for reading :)`
`Have a great day ahead!`
