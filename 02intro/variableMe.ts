// let variableName: type = "value"

let greetings: string = "Hello Darby";

let mynum = 6

// methods suggested based on type aka cannot use string method on number
greetings.toLowerCase()

console.log(greetings);

// number
let userId: number = 334455
// better practice: let userId = 334455 (not redundant)
userId.toFixed()
// boolean
let isLoggedIn: boolean = false

// any (basically turns off type checking)
let hero; // these scenarios should infer the type
// correct way: let hero: string;

function getHero(){
  return "thor"
}

hero = getHero()