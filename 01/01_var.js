const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  //undefined

// accountId = 2 // not allowed as const var


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │   144553    │
// │    1    │ 'hc@hc.com' │
// │    2    │ '21212121'  │
// │    3    │ 'Bengaluru' │
// │    4    │  undefined  │