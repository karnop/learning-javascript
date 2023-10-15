// Objects

// slingleton : object made from constructor

// object creation
const user = {}     // not singleton
//const jsUser = Object.create(); // singleton    
//const jsUser = new Object(); // singleton    

const obj = {
    name : "Manav",
    age : 19,
    location : "Delhi",
    email : "manavsanger19@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};
// console.log(obj);

// freeze() method prevents object from getting modified

//
// OBJECTS PART 2
//

const tinderUser = {};
tinderUser.id = 13;
tinderUser.name = "Tim";
// console.log(tinderUser);

const regularUser = {
    email : "aksmas@google.com",
    fullname : {
        userFullname : {
            firstname : "Manav",
            lastname : "Sanger"
        }
    }
}

// console.log(regularUser);

// combining 2 objects
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

let obj3 = Object.assign(obj1, obj2);
console.log(obj3);
obj3 = {...obj1, ...obj2};
console.log(obj3);

// to get list of keys and values
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

// hasOwnProperty("xyz") : returns boolean if the property exists


// 
// object destructuring and JSON API
//

const course = {
    coursename : "demo demop",
    courseInstructor : "demon",
    price : 9999
};
const {courseInstructor} = course;
const {price : pr} = course;
console.log(courseInstructor);
console.log(pr);

