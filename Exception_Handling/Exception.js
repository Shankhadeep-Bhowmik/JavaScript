// // // Compile time error
// // // console.log(1);
// // console.log(x);
// try{
//   // Write the code here where error may occur
//   console.log("Try block started");
//   console.log(x);
//   console.log("Try block ends here");
// }catch(e){
//   // define the error
//   console.log("I AM INSIDE CATCH BLOCK");
//   console.log("ERROR: ",e.message);
// }finally{
//   console.log("Finally block executed");
// }

// try{
//   console.log(x); // reference error
// }catch(err){
//   throw new Error("Declare nahi hai!");
// }
let errorCode = 100;
if(errorCode == 100){
  throw new Error("Shankhadeep You did invalid json");
}
