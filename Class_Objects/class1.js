// // // // class Student{
// // // //   constructor(name, age){
// // // //     this.name = name;
// // // //     this.age = age;
// // // //   }

// // // //   greet(){
// // // //     console.log(`Hey, I am ${this.name} age is ${this.age}`);
// // // //   }
// // // // }

// // // // const s1 = new Student("Alice", 21);
// // // // const s2 = new Student("Bob", 22);

// // // // s1.greet();
// // // // s2.greet();
// // // // default values
// // // class Car{ 
// // //   constructor(brand="Unknown", speed=0){
// // //     this.brand = brand;
// // //     this.speed = speed;
// // //   }
// // //   showCar(){
// // //     console.log(`Car : ${this.brand}, Speed : ${this.speed}`)
// // //   }
// // // }
// // // const car1 = new Car("BMW", 100);
// // // const car2 = new Car();
// // // car1.showCar();
// // // car2.showCar();

// // class BankAccount{
// //   constructor(user, balance=0){
// //     this.user = user;
// //     this.balance = balance;
// //   }

// //   deposit(amount){
// //     this.balance += amount;
// //     console.log(`${amount} is credited to your bank account.`);
// //   }

// //   withdraw(amount){
// //     if (amount > this.balance){
// //       return "Insufficient balance in your bank account.";
// //     }
// //     this.balance = this.balance - amount;
// //     console.log(`${amount} is debited from your bank account.`);
// //   }

// //   displayBank(){
// //     console.log(`User: ${this.user}\nBalance: ${this.balance}`);
// //   }
// // }

// // const user1 = new BankAccount("Alice", 3500);
// // user1.displayBank();
// // user1.deposit(300);
// // user1.displayBank();
// // user1.withdraw(200);
// // user1.displayBank();

// // class MathHelper{
// //   static square(n){
// //     return n * n;
// //   }
// // }
// // console.log(MathHelper.square(5));
// // console.log(MathHelper.square(10));
// // class Student{
// //   constructor(rollno, name){
// //     this.rollno = rollno;
// //     this.name = name;
// //   }

// //   static schoolName = "Kendriya Vidyalaya ASC";
// // }

// // const s1 = new Student(101, "Alice");
// // const s2 = new Student(102, "Bob");
// // console.log(s1.name)
// // console.log(s2.name)
// // console.log(s1.schoolName)
// // console.log(Student.schoolName)

// class Car{
//   constructor(color){
//     this.color = color;
//   }

//   static noOfTiers = 4;

// }
// let c1 = new Car("Green")
// let c2 = new Car("Red")
// console.log(c1.color)
// console.log(c2.color)
// console.log(Car.noOfTiers)

// class Person{
//   constructor(name){
//     this._name = name;
//   }
//   get name(){
//     return this._name;
//   }
//   set name(value){
//     if(value.length < 2){
//       console.log("Name too short");
//       return;
//     }
//     this._name = value;
//   }
// }
// const p1 = new Person("Alice");
// console.log(p1.name);
// p1.name = "Bob";
// console.log(p1.name);

// class Animal{
//   constructor(name){
//     this.name = name;
//   }

//   speak(){
//     console.log(`${this.name} make sound`);
//   }
// }
// class Dog extends Animal{
//   constructor(name, breed){
//     super(name);
//     this.breed = breed;
//   }

//   speak(){
//     console.log(`${this.name} barks!`);
//   }
// }
// const dog = new Dog("Tommy","Labrador");
// dog.speak();
// console.log(dog instanceof Animal);
// const dog1 = new Dog("Tony","Indian Dog");
// dog1.speak();

class Person{
  #name;
  #age;
  constructor(name, age){
    this.#name = name;
    this.#age = age;
  }

  get name(){
    console.log("I am inside Getter function");
    return this.#name;
  }

  set name(value){
    console.log("Inside the setter function");
    this.#name = value;
  }
}

const p = new Person("Alice", 23);
console.log(p.name);
p.name = "Bob";
console.log(p.name)