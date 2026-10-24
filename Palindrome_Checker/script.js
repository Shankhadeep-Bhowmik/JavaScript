const inputString = document.getElementById("inputString");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", (e)=>{
  e.preventDefault();
  checkPalindrome();
});
inputString.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    checkPalindrome();
  }
})

function checkPalindrome(){
  result.textContent = "";
  let word = inputString.value.trim();
  console.log("Actual Word",word);
  if(word === ""){
    alert("Enter the word!");
    return;
  }
  let wordToArray = word.split("");
  console.log("Word to Array",wordToArray);
  let reversedArray = wordToArray.reverse();
  console.log("Reversed Array",reversedArray);
  let newWord = reversedArray.join("");
  console.log("New word",newWord);
  if(word.toLowerCase() === newWord.toLowerCase()){
    result.textContent = "PALINDROME";
  }else{
    result.textContent = "NOT PALINDROME";
  }
}
