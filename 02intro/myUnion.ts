// allows to use multiple data types
let score: number | string = 33

// both of these are allowed
score = 44
score = "55"

type User = {
	name: string
	id: number
}

type Admin = {
	username: string
	id: number
}

let darby: User | Admin = { name: "darby", id: 345 }

darby = { username: "ds", id: 345 }

// function getDbId(id: number | string){
//   console.log(`DB id is: ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
	// id.toLowerCase() // does not let you do on both types so will throw error 
	if (typeof id === "string") {
		id.toLowerCase()
	}
}

//array

const data: number[] = [1,2,3]
// all numbers OR all strings in array
const data2: string[] | number[] = ["1", "2", "3"]
// can be a mix of strings and numbers
const data3: (string | number)[] = ["1", 2, "3"]

// literal type of assignment where can only be 3.14
let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// this is not allowed
// seatAllotment = "crew"