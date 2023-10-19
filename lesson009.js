// Functions

function sayMyName() 
{
    console.log("Manav Mahesh Sanger");
}

function addTwoNums(num1, num2)
{
    return num1+num2;
}

// rest operator
function cartPrice(...num1)
{
    return num1;
}
console.log(cartPrice(100, 200, 300, 400, 500));

// objects and fns
const user =
{
    username : "manav",
    price : 30
}
function handleObject(anyObject)
{
    console.log(`Username is : ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject(100);
