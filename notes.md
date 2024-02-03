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
	const user: (string | number)[] = ['ds', 1]
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
