// fiter, map and reduce

const coding = [ "js", "ruby", "java", "python", "cpp" ];

// const values = coding.forEach((items) => {
//     console.log(items);
// });

// console.log(values); // values is undefined

// FILTER 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const values = myNums.filter((num) => ( num > 4));
// console.log(values);  


// MAP 
let values2 =  myNums.map((num) => (num+10));
// console.log(values2);
// can be chained

values2 = myNums.map((num) => (num*10)).map((num) => (++num));
// console.log(values2);

// REDUCE
const nums = [1, 2, 3, 4, 5, 6];
const initialVal = 0;
const myTotal = nums.reduce((accumulator, currVal) => (accumulator+currVal), initialVal );
console.log(myTotal);