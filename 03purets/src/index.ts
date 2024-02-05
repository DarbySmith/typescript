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
