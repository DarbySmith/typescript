// allows to use multiple data types
var score = 33;
// both of these are allowed
score = 44;
score = "55";
var darby = { name: "darby", id: 345 };
darby = { username: "ds", id: 345 };
// function getDbId(id: number | string){
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // id.toLowerCase() // does not let you do on both types so will throw error 
    if (typeof id === )
         = "string";
    {
        id.toLowerCase();
    }
}
