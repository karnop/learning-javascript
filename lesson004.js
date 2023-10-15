// STRINGS 

let namee = "Manav";
const repoCount = 7;

console.log(namee + repoCount + "Value"); // not preferred
console.log(`Hello my name is ${namee} and my repo count is ${repoCount}`); // preferred

console.log(`Size : ${namee.length}`);
console.log(`Uppercase String : ${namee.toLocaleUpperCase()}`);
console.log(`char at index 3 : ${namee.charAt(3)}`);
console.log(`index of a : ${namee.indexOf('a')}`);
console.log(`last index of a : ${namee.lastIndexOf('a')}`);
console.log(`index of t : ${namee.indexOf('t')}`);

// partitioning a string
// negative values are ignored
const newString = namee.substring(0, 2);
console.log(newString);

// negative values are taken into consideration
const anotherString = namee.slice(-8, 3);
console.log(anotherString);

// trim and replace 
let s2 = "      dfdsfdsf     ";
console.log(s2);
s2 = s2.trim();
console.log(s2);

const url = "dssf%20df@gmail.com";
console.log(url.replace('%20', '-'));

// split
console.log(namee.split('a'));
