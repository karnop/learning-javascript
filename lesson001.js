// variables
// let const var usage

const accountId = 19;
let accountEmail = "manavsanger19@gmail.com";   // most optimal for variable declaration
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// changing stuff

//accountId = 2;
//console.log(accountId); // cannot do this coz its constant

accountEmail = "manavsanger40@gmail.com";
console.log(accountEmail);  // can do this

accountPassword = "122321323";
console.log(accountPassword);   // can do this

accountCity = "Mussouri";
console.log(accountCity);   // can do this

// better way to print
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// NOTE
// we do not use var for variables due to scope issues. it has no concept
// on block scope.
