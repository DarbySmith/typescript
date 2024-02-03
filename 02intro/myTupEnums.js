"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// order is not specific between datatypes
var user = ['ds', 1];
// must be in the specified order!
var tUser;
tUser = ["ds", 25, true];
// can ONLY have 3 number elements in array
var rgb = [255, 122, 432];
var newUser = [122, "example@google.com"];
// there is nothing stopping from reassigning wrong type!
newUser[1] = "ds@g.com";
