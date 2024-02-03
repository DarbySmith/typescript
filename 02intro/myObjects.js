"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "darby",
    email: "d@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "darby", isPaid: false });
// THIS MAY BE CONFUSING BUT LOOK OUT FOR THIS!
var newUser = { name: "darby", isPaid: false, email: "d@.com" };
// this is going to throw an error
// createUser({name: "darby", isPaid: false, email: "d@.com"})
// this is NOT going to throw an error
createUser(newUser);
// function that returns an object
function createCourse() {
    return { name: "reactjs", price: 10 };
}
function createAnotherUser(user) { }
createAnotherUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "darby",
    email: "d@d.com",
    isActive: true
};
myUser.name = "new name";
