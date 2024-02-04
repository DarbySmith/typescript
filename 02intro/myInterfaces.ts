interface Person {
	readonly dbId: number,
	email: string,
	userId: number,
	googleId?: string
	// function that returns a string w/ 2 syntax
	// startTrail: () => string
	startTrail(): string
	getCoupon(couponname: string, value: number): number
}
// "re-opening" of interface = adding properties to Person
interface Person {
	githubToken: string
}

// this will have all properties of Person
interface Admininstrator extends Person {
	role: "admin" | " ta" | "learner"
}

const darby2: Person = { dbId: 25, email: "d@d.com", userId: 4455, githubToken: "git",
startTrail: () => {
	return "trail started"
},
getCoupon: (name: "darby", value: 10) => {
	return 10
}
}

darby2.email = "darby@g.com"