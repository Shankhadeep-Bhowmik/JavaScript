/*
Async: 
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest
*/
// console.log("Hey");
// setTimeout(() => {
//   console.log("Hey2")
// }, 12000);
// console.log("Hey3");
// console.log("Hey 1");
// console.log("Hey 2");
// setTimeout(() => {
//   console.log("Hey 3");
// }, 1000);
// console.log("Hey 4");

// let ans = fetch("https://www.facebook.com");
// console.log(ans);

// let result = new Promise((resolve, reject)=>{
//   if(false){
//     return resolve("True");
//   }else{
//     return reject("False");
//   }
// })

// result.then((res) => console.log("Chal gaya!",res))
// .catch((res) => console.log("Nahi chala!",res));

// user will ask for a number between 0 to 9 and if the number below 5 is resolve or reject
// let ans = new Promise((res, rej) => {
//   let n = Math.floor(Math.random() * 10)
//   if(n < 5){
//     return res("Number is less than 5");
//   }else{
//     return rej("Number is not less than 5");
//   }
// });

// ans.then(res => console.log(res))
// .catch(err => console.log(err));
// let result = new Promise((resolve, reject) => {
//   let number = Math.floor(Math.random() * 10) + 1;
//   if(number % 2 === 0){
//     return resolve(`${number} is a Even Number!`);
//   }else{
//     return reject(`${number} is a Odd number`);
//   }
// })
// result
// .then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// })
// let ans = new Promise((res, rej) => {
//   return res("Ghar ao")
// })
async function abcd() {
  let raw = await fetch("https://randomuser.me/api/");
  let ans = await raw.json();
  console.log(ans);
  
}
abcd();