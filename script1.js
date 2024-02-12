"use strict";
let name = "soknem";
console.log(name);
function test() {
  if (true) {
    //let x = 50;
    var x=10;
    console.log("this is in side= " + x);
  }
  console.log("thos is outside=" + x);
}
test();
