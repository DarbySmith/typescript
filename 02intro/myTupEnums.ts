// order is not specific between datatypes
const user: (string | number)[] = ['ds', 1]
// must be in the specified order!
let  tUser: [string, number, boolean]

tUser = ["ds", 25, true]

// can ONLY have 3 number elements in array
let rgb: [number, number, number] = [255, 122, 432]

type User = [number, string]

const newUser: User = [122, "example@google.com"]
// there is nothing stopping from reassigning wrong type!
newUser[1] = "ds@g.com"
// this will not be allowed
// newUser.push(true)


export {}