const User = {
  name: "darby",
  email: "d@gmail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "darby", isPaid: false})

// THIS MAY BE CONFUSING BUT LOOK OUT FOR THIS!
let newUser = {name: "darby", isPaid: false, email: "d@.com"}

// this is going to throw an error
// createUser({name: "darby", isPaid: false, email: "d@.com"})
// this is NOT going to throw an error
createUser(newUser)



// function that returns an object
function createCourse():{name: string, price: number}{
  return {name: "reactjs", price: 10}
}


// type is keyword alias which is easier to reuse and check types
type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createAnotherUser(user: User){}

createAnotherUser({name: "", email: "", isActive: true})

type AnotherUser = {
  readonly _id: string // the id is read only so it cannot be changed
  name: string
  email: string
  isActive: boolean
  creditcardDetails?: number // ? allow to optionally use attribute or not
}

let myUser: AnotherUser = {
  _id: "1234",
  name: "darby",
  email: "d@d.com",
  isActive: true
}

myUser.name = "new name"
// this will not let you reassign value 
// myUser._id = "5678"

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

// combine types into one type
type cardDetails = cardNumber & cardDate & {
  cvv: number
}

export {}