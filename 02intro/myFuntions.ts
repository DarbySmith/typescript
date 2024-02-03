// type the parameters for the method
function addTwo(num: number): number{
  return num + 2
}

function getUpper(val: string){
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

addTwo(5)
getUpper("darby")
signUpUser("darby", "@email", true)
loginUser("darby", "@email")

// This is an example of a function where there are two different return types
//    it can be solved with unions
// function getValue(myVal: number){
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return ""
}

const heros = ["thor", "spiderman", "ironman"]

// hero context is automatic based on values in heros array
// shows string as the return, if want to put arg type (hero: string)
heros.map((hero): string => {
  return `hero is ${hero}`
})

// void return means there is no return value
function consoleError(errormsg: string): void{
  console.log(errormsg);
}

// never is used for an intentional crash to handle an error 
// throws exceptions or forceful exit of fxn
function handleError(errormsg: string): never{
  throw new Error(errormsg);
}