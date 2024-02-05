"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const darby = new User("d@D.com", "darby");
darby.city = "denver";
