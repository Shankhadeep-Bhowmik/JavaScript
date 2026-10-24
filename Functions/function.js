function greet(name){
  return `Hello, ${name}!`; // fruit full function because it returns something.
}
console.log(greet("Rio"));
let a = 10, b = 100;
console.log(`Add: ${add(a,b)}`);
function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  if(b === 0){
    return "Cannot divide by zero!";
  }
  return a/b;
}
console.log(`Subtract: ${subtract(a,b)}`);
console.log(`Multiply: ${multiply(a,b)}`);
console.log(`Divide: ${divide(a,b)}`);

const square = function(x){
  return x*x;
}
console.log(square(4));
const cube = function(num){
  return num ** 3;
}
console.log(cube(5));

function show(a){
  console.log(a+0);
}
function show(a,b) {
  console.log(a+b+0);
}
show(10);
show()