# Intro
## types
- number string boolean null undefined void object array tuples

- any - not good practice to use
- never
- unknown

situation
- a function accepts 2 numbers
- a function returns a string

## primatives
- string
- number
- boolean

There is no equivalent of int and float in Javascript - only numbers
Value is inferred

## Any
- should not use any in code as it is a bad practice. It defeats the purpose of using type script
- noImplicitAny flag will flag any "any" types

## variable declarations
- let
- const

## functions
- keyword: function
    ```ts
	function methodName(argument: type = default value): return type {
      function logic
    }
	```

## Type aliases 
- keyword: type
  ```ts
  type User = {
    name: string
    phone: number
    isActive: boolean
  }
  ```

  - ? --> allows you to have optional attributes 
	```ts
	type User = {
		name: string
		phone?: number
	}
	```

  - readonly --> allows you to have attributes that cannot be altered
	```ts
	type User = {
		readonly name: string
		phone: number
		isActive: boolean
	}
	```


## Arrays
- two different syntax
  ```ts
  const heros: string[] = []
  const heros: Array<string> = []
  ```

## Union
- allows you to use multiple different types at a time
  - this can be a number or string:
    ```ts
	let score: number | string
	```

## Tuples
- useful to specify what order you want datatypes to be in
	```ts
	const user: (string | number)[] = ['ds', 1]
	```
- be careful though there are some loop holes that allow you to 
reassign values based on index

## Enums
- Allow you to set constants in an immutable way that is easy to use
	```ts
	enum SeatChoice {
		AISLE,
		MIDDLE1,
		MIDDLE2,
		WINDOW
	}
	
	const dsSeat = SeatChoice.AISLE // dsSeat = 0
	```

## Interfaces
- describe the shape the values have and powerful way of defining contracts within code
	```ts
	interface User {
		readonly id: number
		name: string
		email?: string
		startTrial(): string
		getCoupon(couponname: string): number
	}

	const darby: User = {
		id: 25,
		name: "darby",
		startTrial: () => {
			return "trial started"
		},
		getCoupon: (couponname: "super") => {
			return 10
		}
	}
	```

## initialize for project
- commands: 
	- $ tsc --init
		- creates `tsconfig.json`
	- $ npm init -y
		- creates `package.json`
			- installing package manager 
- create file `index.html`
	- type `!`+`tab`
		- will autofill
	- in <body> type `script`
		- select option `script:src`
			- loads a script file
			- `<script src=""></script>`
- create a `src` and `dist` directory
	- `src` is where you write your code
	- `dist` gets onto production is getting served to the end user
- inside `src` create a `index.ts` file
- inside `dist` create a `index.js` file
- in `index.html` add src reference ("./dist/index.js") to `<script>`
	- you shouldn't write anthing in this index.js file
- `tsconfig.json`
	- uncomment and edit: `"outDir": "./dist"`
		- compiles files with .ts into the dist directory
- `index.ts`
	```ts
	console.log("message")
	```
- $ tsc -w
	- will keep running and looking for file changes
- opening localhost
	- lite-server
		- install package to run the localhost server
			- $ `npm i lite-server`
		- `package.json`: `scripts` add `"start": "lite-server"`
		- $ npm start
	- extension live server
		- install 'live server' extension
		- navigate to `index.html`
		- right click and select `open with live server` (make sure to close at end)

## creating classes
- syntax:
	```ts
	class User {
		email: string
		name: string
		city: string = ""
		constructor(email: string, name:string){
			this.email = email;
			this.name = name;
    	}
	}

	const darby = new User("d@D.com", "darby")
	darby.city = "denver"
	```
	OR
	(this is the usual way you will see prof developers do)
	```ts
	class User {
		private readonly city: string = "denver"
		constructor(
			public email: string, 
			public name:string,
			private userId: string
			){
		}
	}
	```
## access
- private
	- does not allow you to acces an attribute
	```ts
	private city: string = ""
	```
- public
	- default, but same syntax as above subbed with 'public'

## getters and setters
- *(said was common ask in interview)*
	- when making setter you cannot make the return type `void` or any other type
		- error: `A 'set' accessor cannot have a return type annotation.`
		- wants to *not* have a return type
		ERROR
		```ts
		set coureCount(courseNum: number): void {}
		```
		w/out void = GOOD
		```ts
		set coureCount(courseNum: number): {}
		```
- keywords `get` and `set`

## access modifiers
- public
	- accessible outside the class
- private
	- not accessible outside the class or by children (inherited) classes
- protected
	- is not accessible outside of the class but accessible by children
	- `protected _courseCount: number = 1`

## class implementing an interface
- keyword: `implements`
- syntax:
	```ts
	interface TakePhoto {
		cameraMode: string
		filter: string
		burst: number
	}

	class Instagram implements TakePhoto {
		constructor(
			public cameraMode: string,
			public filter: string,
			public burst: number,
			public caption: string,
			public isVerified: boolean
		){}
	}
	```
- can add extra attributes, but MUST have all that are implemented in interface

## inheritance 
- keyword: extends

## abstract classes
- exactly the blue print 
- you CANNOT create objects from this class
- the class extending it will be responsible for creating objects 
- help the class inheriting them have better structure
	```ts
	abstract class TakePhoto {
		constructor(
			public cameraMode: string,
			public filter: string
		){}

		abstract getSepia(): void
		getReelTime(): number{
			return 8
		}
	}

	class Instagram extends TakePhoto {
		constructor(
			public cameraMode: string,
			public filter: string,
			public burst: number
		){
			super(cameraMode, filter)
		}

		getSepia(): void {
			console.log("sepia")
		}
	}
	```

## generics
- make components/functions easily reusable
- building components that are reusable
- keyword: `<T> or <Type>`
	```ts
	// generic function
	function identityThree<Type>(val: Type): Type {
		return val
	}

	// gereric variable
	const getMoreSearchProducts = <T>(products: T[]): T => {
		// do some database operations
		const myIndex = 4
		return products[myIndex]
	}

	// generic class
	class Sellable<T>{
		public cart: T[] = []

		addToCart(product: T){
		this.cart.push(product)
		}
	}
	```

## narrowing
- try to narrow down the datatype of your variable
- typeof type guards 
- in operator narrowing
	- a way to narrow down the potential type
	```ts
	function isAdminAccount(account: User | Admin){
		if ("isAdmin" in account){
			return account.isAdmin
		}
		return false
	}
	```
- instance of narrowing
	 - `instanceof` keyword
	 ```ts
	 function logValue(x: Date | string) {
		if (x instanceof Date) {
			console.log(x.toUTCString());
		} else {
			console.log(x.toUpperCase())
		}
	}
	 ```
- type predicates
	```ts
	// this returns a type 
	function isFish(pet: Fish | Bird): pet is Fish{
		return (pet as Fish).swim !== undefined
	}

	function getFood(pet: Fish | Bird){
		if (isFish(pet)) {
			pet
			return "fish food"
		} else {
			pet
			return "bird food"
		}
	}
	```
- exhaustive types


