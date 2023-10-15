// date and time in js

// a new way of using date time - temporal, is in development

let myDate = new Date();
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString);
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());

// coustom date param : year, month, date, hour, minutes, seconds
let customDate = new Date(2023, 0, 23, 5, 3); // month starts from 0
customDate = new Date("2023-01-14"); // month starts from 1
console.log(customDate.toString());

// time stamps
let timeStamp = Date.now();
console.log(timeStamp);

// other functions : getMonth, getYear, etc..

