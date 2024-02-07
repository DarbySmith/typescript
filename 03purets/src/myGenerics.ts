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