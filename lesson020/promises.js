/*
const promise1 = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promise1.then(function()
{
    console.log("Promise Consumed");
});

// new promise
new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log("Async task 2");
        resolve(); 
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
});

// new promise
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Manav", email : "manavsanger18@gmial,com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})

// new promise
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function()
    {
        let error = false;
        if(!error)
        {
            resolve({username : "Manav", email : "manavsanger18@gmial,com"});
        }
        else
        {
            reject("ERROR : Something went wrong");
        }
    }, 1000);
})

const username = promise4.then((user) => {
     console.log(user);
     return user.username;
})
.then((username) => {console.log(username);})
.catch((error) => {console.log(error);})
.finally(() => {console.log("The promise is either resolved or rejected");})


// new promise
const promise5 = new Promise((resolve, reject) => {
    setTimeout(function()
    {
        let error = true;
        if(!error)
        {
            resolve({username : "Manav", email : "manavsanger18@gmial,com"});
        }
        else
        {
            reject("ERROR : JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try{
    const response = await promise5;
    console.log(response); 
    } catch(error)
    {
        console.log(error);
    }
};

consumePromiseFive();



//
async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error", error);
    }
}
getAllUsers();
*/

// alternatively
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {console.log(error)});