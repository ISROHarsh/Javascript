const accountId = 123456
let accountEmail = "gamoaster@gmail.com"
var accountPassword = "12345"
accountCity = "Mysore"

// accountId = 2 // not allowed to again assign a value to a constant allocation

accountEmail = "aka.com"
accountPassword = "45612"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because  of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])