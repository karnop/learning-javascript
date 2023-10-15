// ARRAY INTRODUCTION

// js arrays are resizable and can contain hetrogeneous data
const myArr = [0, 1, 2, 3, 4, 5, true, "manav"];

console.log(myArr);
console.log(myArr.length);

// adding and deleting
myArr.push(33);     // insertion at the end
myArr.pop();        // deletion at the end
myArr.unshift(12);  // insertion at the beginning
myArr.shift();      // deletion at the beginning

// othe functions : indexOf=>[-1 if not exist], includes=>[booleans fn]

const newArr = myArr.join();    // converts in string
console.log(newArr);

// slice and splice
let arr = myArr.slice(1, 3);
console.log("Slice : ", arr, " ", myArr);

// in splice, last range is included and taken out from original array
arr = myArr.splice(1, 3);
console.log("Splice : ", arr, " ", myArr);

//
// Array Part 2
//

// joining 2 arrays
const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
let heroes = marvel_heroes.concat(dc_heroes); // push doesnt works here
console.log(heroes);

heroes = [...marvel_heroes, ...dc_heroes];  // ... is a spread operator
                            // it spreads the array to individual elements
console.log(heroes);

// flatten an array
arr = [1, 2, 3, 4 , 5, [6, 7, 8], [9, [10, 11], 12], 13, 14, 15];
const flat_arr1 = arr.flat(1);  // depth is param [1d, 2d];
const flat_arr2 = arr.flat(Infinity);
console.log(flat_arr1);
console.log(flat_arr2); 

// creating array from variables
let score1 = 100, score2 = 200, score3 = 300;
arr = Array.of(score1, score2, score3);
console.log(arr);