// Solve-1 //


 // we are already knew that, in javascript variable can be declared using (var,let and const).these keywords defined the scope of the variable differently.the var keywords declare as a variable with function scope it's means the variable is accessible throughout the entire function is declared.if it is within a block (if)statement.one the other hand,the var and const keyword declare as block scope variable.it's means the variable are accessible with in block statement.it mean with in curly braces{}of an if statement.outside of the function those variable are not accessible.according to the code,
 
 // 1. we can see  varVariable is declare with var  and has a function scope .it means it is accessible anywhere with in the scope test  function,including outside the if block.


 // 2.
 // let letVariable = "I am let";
 //  letVariable is declared with let and has block scope. This means it is only accessible within the if block. Therefore, console.log(letVariable); will throw a ReferenceError because letVariable is not accessible outside the if block.


 // 3.const constVariable = "I am const";
 // constVariable is declared with const and also has block scope. This means it is only accessible within the if block. Therefore, console.log(constVariable); will throw a ReferenceError because constVariable is not accessible   outside the if block.
 // we can  see all variables' values within the if block, you would need to log them inside the if block like this:
 // javascript according to the above code we can write as,


 function scopeTest(){
      if(true){
          var varVariable = "I am var";
          let letVariable = "I am let";
          const constVariable = "I am const";
          console.log(varVariable); // Ans: This will log "I am var"
          console.log(letVariable); // Ans: This will log "I am let"
          console.log(constVariable); // Ans: This will log "I am const"
      }
  }


  // Solve-2 //


  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  console.log(greet("Alice")); // Ans: "Hello, Alice!"
  console.log(greet("Bob", "Good morning")) // Ans: "Good morning, Bob!"

   // Solve-3 //




   function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  
  console.log(sum(1, 2, 3)); // Ans: 6
  console.log(sum(10, 20, 30, 40)); // Ans: 100
  console.log(sum(5)); // Ans: 5


  // Solve-4 //




  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];


  const mergedArray = [...array1,...array2,...array3];

  console.log(mergedArray); // Ans: [1, 2, 3, 4, 5, 6, 7, 8, 9]




 // Solve-5 //


 const name = "John";
 const age = 30;

 const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
   }
 };

 console.log(person.greet()); // Ans: "Hi, I'm John and I'm 30 years old."


   
 // Solve-6 //


 const fruits = ["apple", "banana", "cherry"];

 for (const fruit of fruits) {
 console.log(fruit);}



 // Solve-7 //


  const name = "Alice";
  const age = 25;


 const message = `My name is ${name} and I am ${age} years old.`;
 console.log(message); // Ans: "My name is Alice and I am 25 years old."




 // Solve-8 //


 const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
  console.log(`${student.name}: ${student.grade}`);} // Ans: "Alice: 90  Bob: 85   Charlie: 92"

 

  // Solve-9 //


  const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const num of innerArray) {
      sum += num;
    }
    console.log(sum); // Ans: "6 15 24"
  }
  


  // Solve-10 //


  const a = 5;
  const b = 10;

 const result = `The sum of ${a} and ${b} is ${a + b}.`;
 console.log(result); // Ans: "The sum of 5 and 10 is 15."

  