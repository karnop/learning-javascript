// DATATYPE CONVERSION 

let score = "33";
let score2 = "33as"
console.log(typeof score);

let valInNum = Number(score);
console.log(typeof valInNum);
console.log("val : " + valInNum);

let valInNum2 = Number(score2);
console.log(typeof valInNum2);
console.log("val2 : " + valInNum2);

// if we use Number(null) we get 0
// if we use Number(undefined) we get NaN
// if we use Number(true) we get 1
// if we use Number(false) we get 0
// if we use Number(string) we get NaN

// if we use Boolean(1) we get true
// if we use Boolean(0) we get false
// if we use Boolean("") we get false
// if we use Boolean("string") we get true

// if we use String(anything) we get string