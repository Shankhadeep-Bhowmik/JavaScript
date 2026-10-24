// let num = [1,2,3,4,5];
// num.forEach(quadrant);
// num.forEach(display);
// function display(element){
//   console.log(element);
// }
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array){
//   array[index] = element * 3;
// }
// function quadrant(element,index,array){
//   array[index] = element*4;
// }

let fruits = ['apple','banana','orange','coconut'];
// fruits.forEach((fruit, index, array)=>lowerCase(fruit,index,array));
fruits.forEach(capitalize);
// fruits.forEach(display);


function display(element){
  console.log(element);
}

function upperCase(element) {
  console.log(element.toUpperCase());
}

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}
console.log("Array:",fruits);
function lowerCase(element, index, array){
  array[index] = element.toLowerCase();
}
function repeatVal(element, index){
  console.log(`${[index]} : ${element.concat(" ").repeat(3)}`);
}

function capitalize(element, index, array){
  let firstLetter = element.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let word = element.slice(1,undefined);
  let res = firstLetter.concat(word);
  array[index] = res;
}