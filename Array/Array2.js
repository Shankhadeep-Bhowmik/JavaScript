// let line = ["Alice","Bob","Charlie"];
// console.log("Before David add: ",line);
// line.push("David");
// console.log("After David add: ",line);
// line.unshift("Emma");
// console.log("After adding Emma: ",line);
// console.log("First person removed:",line.shift());
// console.log("After removing first person:",line);
// let words = ["JavaScript", "is", "really", "fun"];
// console.log(words.join(" "));
// const rock = ['Song A','Song B'];
// const pop = ['Song C','Song D'];
// let playlist = rock.concat(pop);
// console.log(playlist);
// playlist.reverse();
// console.log(playlist);
// const scores = [45, 82, 59, 94, 30, 75];
// let firstPassingScore = scores.find(score => score >= 60);
// console.log("First Passing Score:",firstPassingScore);
// let failScore = scores.filter(score => score < 60);
// console.log("Fail Score:",failScore);
// let colors = ['Red','Blue','Green','Yellow','Purple'];
// console.log("Original Colors:",colors);
// let removedColors = colors.splice(2,2,"Orange");
// console.log(removedColors)
// console.log(colors)
// const temps = [22, 24, 21, 25, 27, 30, 29];
// let weekendTemp = temps.slice(5,undefined);
// console.log(weekendTemp);
// console.log(temps);
// const prices = [10, 20, 30, 40];
// let totalPrice = prices.map(price => {
//   return price * 2;
// }).reduce((sum, price) => {
//   return sum + price;
// },0);
// console.log("Total Price:",totalPrice);
const highScores = [88, 42, 95, 12, 70, 55];
let below50 = highScores.sort((a,b)=>b-a).filter(s=> s>50);
console.log(below50);