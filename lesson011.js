// this keyword and arrow functions

const user = {
    username : "Manav",
    price : 99999,
    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
    }
}
console.log(this);

function chai()         // this keyword does not works in fucntions
{
    let name = "ooga booga";
    // console.log(this.name);  
}
chai();

// Arrow Function
const fun = (num1, num2) =>
{
    // statements
    return num1+num2;
}
// alternatively,
const funn = (num1, num2) => (num1 + num2);