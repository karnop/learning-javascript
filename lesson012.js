// High order array loops

// for of loop
const arr = [1, 2, 3, 4, 5];
// for (const num of arr) 
// {
//     console.log(num);    
// }

const map = new Map()
{
    map.set("IN", "India");
    map.set("USA", "United States of America");
    map.set("Fr", "France");
    map.set("IN", "India");
}
// for (const key of map) 
// {
//     console.log(key);
// }
// for (const [key, value] of map) 
// {
//     console.log(key, value);
// }

//
// FOR IN
//

const obj = 
{
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift"
}
// for (const key in obj) 
// {
//     console.log(key);
// }

//
// ForEach loop
//
const coding = ["js", "ruby", "cpp"];
coding.forEach( (item) => {
    console.log(item);
} )