// Example 1
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x);
  }
  console.log(x);
}

// Example 2
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x);
  }
  console.log(x);
}

// Example 3
var a = 5;
var b = 10;
 
if (a === 5) {
  let a = 4;
  var b = 1;
 
  console.log(a);
  console.log(b);
} 
 
console.log(a); // 5
console.log(b); // 1
