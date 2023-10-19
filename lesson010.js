// Scope level and mini hoisting

let a = 10;
const b = 20;
var c = 30;
console.log(a); console.log(b); console.log(c);

if (true) 
{
    let d = 10;
    const e = 20;
    const f = 30;
}
// console.log(d); // wont work as let is defined in local scope above
// console.log(e); // wont work as const is defined in local scope above
// console.log(f); // WORKS : problematic

// nested scope
function one()
{
    const username = "Manav";

    function two()
    {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);    // ERROR
    two();
}
one();


// hoisting
function f1()       // can be called before declaration
{
    console.log("fdsfsd");
}
const f2 = function()   // can NOT be called before declaration
{
    console.log(dfdfd);
}


