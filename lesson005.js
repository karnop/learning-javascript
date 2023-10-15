// Number and Math library

const balance = 123.8966;

// fixed and precision
console.log(balance.toFixed(3));
console.log(balance.toPrecision(2));
console.log(balance.toPrecision(3));
console.log(balance.toPrecision(4));
console.log(balance.toPrecision(5));
console.log(balance.toPrecision(6));
console.log(balance.toPrecision(10));

// locale string
const num = 1000000000;
console.log(num.toLocaleString("en-US")); // american commas
console.log(num.toLocaleString("en-IN")); // Indian commas

// Math library
// Functions : abs, round, ceil, floor, sqrt, random, 

// getting a value in range
const min = 10;
const max = 20;
let num2 = Math.floor((Math.random() * (max - min + 1) +  min));
console.log(num2);