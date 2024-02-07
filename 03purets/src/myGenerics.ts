// array with number values
const score: Array<number> = []
const names: Array<string> = []

// works but doesn't help make sure you are returning/getting right type
function identityOne(val: boolean | number): boolean | number {
    return val
}

// bad practice because no info about type 
function identityTwo(val: any): any{
    return val
}

// this is a generic
// almost like any bc can pass in any type
// the type is logged by the arg type and will set the return type
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("darby")

// shortcut version
function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "patron", type: 1})

// arg is array of T types and return is one T type
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

// with "," means it is a generic not a jsx syntax
const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string
    username: string, 
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
// error because 2nd arg must be type Database
// anotherFunction(3, "4")

interface Quiz{
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

// generic class
class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
       this.cart.push(product)
    }
}