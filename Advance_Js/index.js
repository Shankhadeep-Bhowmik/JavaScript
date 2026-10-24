function createCounter() {
  let count = 0;              // hidden variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());       // 1
console.log(counter());       // 2
console.log(counter());       // 3
// console.log(count);           
// ERROR, nobody //outside can touch i