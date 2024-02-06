// class User {
//     email: string
//     name: string
//     private readonly city: string = "denver"
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }

// const darby = new User("d@D.com", "darby")
// can access it but cannot reset it (without private)
// darby.city
// with private keyword added it cannot be accessed (error thrown)

// this syntax produces the same javascript as the commented out User class above (without the userId)
class User {
    
    // this is accessable by this class and inherited classed (but not outside)
    protected _courseCount: number = 1
    
    readonly city: string = "denver"
    constructor(
        public email: string, 
        public name:string,
        private userId: string
        ){
    }

    private deleteToken(){
        console.log("token deleted")
    }

    // make into getter with keyword "get"
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    // getter for a private attribute
    get courseCount(): number{
        return this._courseCount
    }

    // SHOULD NOT HAVE A RETURN TYPE!
    set coureCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

// INHERITANCE
//  SubUser will inherit all attributes from parent User
//private are not accessable by child
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}