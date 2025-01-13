const accountId = 144553;
let accountEmail = "subhasis@gmail.com"
var accountPassword = "12345"
accountCity = "Odisha"
let accountState

/*accountId = 2 */ //Notallowed
accountEmail = "subha@gmailcom"
accountPassword = "983758"
accountCity = "Bengaluru"

// Prefer not to use var because of the issue of block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])
