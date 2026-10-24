// // // // // Object: A collection of related properties and/or methods. Can represent real world objects (people, products, places) object = {key:value, function()}

// const { name } = require("ejs");

// // // // let person = {
// // // //   firstName:"Spongebob",
// // // //   lastName: "Squarepants",
// // // //   age: 30,
// // // //   isEmployee: true,
// // // //   sayHello: function(){console.log("Hi I am Spongebob!")},
// // // //   eat: () => console.log("I am eating Pizza!"),
// // // // }

// // // // let person1 = {
// // // //   firstName:"Patrick",
// // // //   lastName:"Star",
// // // //   age:42,
// // // //   isEmployee:false,
// // // //   sayHello:function(){console.log("Hey I am Patrick...")},
// // // //   eat: () => console.log("I am eating Burger!"),
// // // // }

// // // // console.log(person.firstName);
// // // // console.log(person.lastName);
// // // // console.log(person.age);
// // // // console.log(person.isEmployee);

// // // // console.log(person1.firstName);
// // // // console.log(person1.lastName);
// // // // console.log(person1.age);
// // // // console.log(person1.isEmployee);
// // // // person.sayHello();
// // // // person1.sayHello();
// // // // person.eat();
// // // // person1.eat();

// // // let student1 = {
// // //   firstName:"Shankhadeep",
// // //   lastName:"Bhowmik",
// // //   reg_No:"25MCAR119",
// // //   course:"MCAR",
// // //   sex:"Male",
// // // }
// // // console.log(student1);
// // // console.log("Full Name:",student1.firstName+" "+student1.lastName);
// // // console.log("Reg No.:",student1["reg_No"]);
// // // console.log("Sex:",student1["sex"]);
// // // student1.semester = 3;
// // // console.log(student1);
// // // console.log(student1["semester"]);
// // // student1["semester"] = 4;
// // // console.log(student1);
// // // delete student1.sex;
// // // console.log(student1);
// // // student1["university"] = "Garden City University";
// // // console.log(student1);
// // // console.log(student1.university);
// // // student1.isStudent = true;
// // // console.log(student1);
// // // student1["year_of_birth"] = 2005;
// // // console.log(student1);
// // // student1.age = 2026 - 2005;
// // // console.log(student1);

// // // this keyword
// // const student = {
// //   firstName:"Alice",
// //   greetings: function(){
// //     console.log(`Hi, I am ${this.firstName}`);
// //   },
// // };
// // console.log(student);
// // student.greetings();
// // let s2 = {
// //   name:"Bob",
// //   age:21,
// //   greet: function(){
// //     console.log(`Good Morning, I am ${this.name}`);
// //   },
// // }
// // console.log(s2);
// // s2.greet();

// // let s3 = {
// //   name:'Rio',
// //   sem:3,
// //   course:'MCA',
// // }
// // console.log(Object.keys(s3));
// // console.log(Object.values(s3));
// // console.log(Object.entries(s3));
// // // merge objects
// // let extra = {college: "GCU"};
// // let merge2 = {...s3, ...extra};
// // console.log(merge2);
// // Object.freeze(s3);
// // s3.name = "ABC";
// // console.log(s3.name);
// const university = {
//   name:"Garden City University",
//   location: {
//     city:"Bangalore",
//     state:"Karnataka"
//   }
// }
// console.log(university);
// console.log(university.location.city);
// console.log(university.location.state);
// // destructuring
// const {name1, location} = university;
// const {city, state} = location;
// console.log(city);
// console.log(name1, location);

let s = {
  name: "Rio",
  sem: 3,
  course: "MCA",
}
for(let key in s){
  console.log(key,":", s[key]);
}