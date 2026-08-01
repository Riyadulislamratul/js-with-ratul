// 1. Declare a variable and assign a number.
// let myNumber = 18 


// 2. Declare a variable and assign a string.
// let myString = "I'm Riyadul Islam Ratul"


// 3. Declare a variable and assign a boolean.
// let myBoolean = false


// 4. Check the data type of a variable.
// console.log(myBoolean)


// 5. Convert a string to a number.
// let str = "123";
// let num = Number(str);
// console.log(num)

// 6. Convert a number to a string.
// let num = 456;
// let str = String(num);
// console.log(str)

// 7. Swap two variables.
// let a = 5;
// let b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(`After swapping: a = ${a}, b = ${b}`)

// 8. Check if a variable is undefined.
// let myVar;
// let helloo = "Hello World"
// if (helloo === undefined) {
//     console.log("Variable is undefined");
// } else {
//     console.log("Variable is defined");
// }

// 9. Declare a constant and try to reassign it.
// const myConstant = 3.1416


// 10.Find the length of a string.
// let myString = "Hello, World!";
// let lengthOfString = myString.length;
// console.log(`Length of the string: ${lengthOfString}`)

// 11.Check if a number is positive or negative.
// const num = 5
// if (num > 0) {
//     console.log("Positive Number")
// } else {
//     console.log("Negative Number")
// }

// 12.Check if a number is even or odd.
// const num = 7
// if (num % 2 === 0) {
//     console.log("Even Number")
// } else {
//     console.log("Odd Number")
// }

// 13.Compare two numbers and print the larger one.
// const num1 = 6
// const num2 = 10
// if (num1>num2) {
//     console.log("Number one is Largest")
// } else {
//     console.log("Number two is Largest")
// }

// 14.Check if two values are equal using ==.
// const value1 = 5;
// const value2 = "5";
// if (value1 == value2) {
//     console.log("Values are Equal");
// } else {    console.log("Values are Not Equal");
// }

// // 15.Check if two values are equal using ===.
// if (value1 === value2) {
//     console.log("Values are Strictly Equal");
// } else {    console.log("Values are Not Strictly Equal");
// }
// 16.Check if a number is divisible by 5.
// const num = 10    
// if (num % 5 === 0) {
//     console.log("Number is Divisible by 5")
// } else {
//     console.log("Number is Not Divisible by 5")
// }

// 17.Check if a number is divisible by both 3 and 5.
// const num = 15
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Number is Divisible by both 3 and 5")
// } else {
//     console.log("Number is Not Divisible by both 3 and 5")
// }    
    
// 18.Find the largest of three numbers.
// const num1 = 10
// const num2 = 20
// const num3 = 30
// if (num1 > num2 && num1 > num3) {
//     console.log("Number one is Largest")
// } else if (num2 > num1 && num2 > num3) {
//     console.log("Number two is Largest")
// } else {
//     console.log("Number three is Largest")
// }

// 19.Check if a year is a leap year.
// const year = 2024
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log("Leap Year")
// } else {
//     console.log("Not a Leap Year")
// }

// 20.Check if a number is between 10 and 50.
// const num = 25
// if (num > 10 && num < 50) {
//     console.log("Number is between 10 and 50")
// } else {
//     console.log("Number is Not between 10 and 50")
// }



// Loops
// 21.Print numbers from 1 to 10.
//  for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// 22.Print even numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }}



// 23.Print odd numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }}

// 24.Print the multiplication table of 5.
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }

// 25.Find the sum of numbers from 1 to 100.
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(`The sum of numbers from 1 to 100 is: ${sum}`)

// 26.Find the factorial of a number.
// let number = 5;
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log(`Factorial of ${number} is: ${factorial}`)


// 27.Reverse a number using a loop.
// let number = 12345;
// let reversedNumber = 0;
// while (number > 0) {
//     let digit = number % 10;
//     reversedNumber = reversedNumber * 10 + digit;
//     number = Math.floor(number / 10);
// }
// console.log(`Reversed Number: ${reversedNumber}`);

// 28.Count digits of a number.
// let number = 12345;
// let count = 0;
// while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log(`Number of digits: ${count}`);

// 29.Print Fibonacci series up to n terms.
// let n = 10;
// let a = 0, b = 1, nextTerm;
// console.log("Fibonacci Series:");

// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }

// 30.Find the power of a number using a loop. 
// let base = 2;
// let exponent = 5;
// let result = 1;
// for (let i = 1; i <= exponent; i++) {
//     result *= base;
// }
// console.log(`${base} raised to the power of ${exponent} is: ${result}`);
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(3, 5)); // Output: 8


32.Create a function to subtract two numbers.

function subtract(a, b) {
    return a - b;
}


51.Sort an array of numbers.
let arr = [5, 2, 9, 1, 3];

// Ascending
arr.sort((a, b) => a - b);
console.log(arr);

// Descending
arr.sort((a, b) => b - a);
console.log(arr);


56.Remove duplicate elements from an array.


function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// Example
let arr = [2, 4, 2, 5, 4, 6, 5];
console.log(removeDuplicates(arr));


60.Find the sum using reduce().

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 150




61.Reverse a string.

const original = "hello";
const reversed = original.split("").reverse().join("");
console.log(reversed); // "olleh"



71.Create an object with name, age, and city.


const person = {
  name: "Mohona",
  age: 21,
  city: "Dhaka"
};

console.log(person);


72.Access object properties.

const person = {
  name: "Ratul",
  age: 22,
  city: "Dhaka"
};

console.log(person.name); // Ratul
console.log(person.age);  // 22
console.log(person.city); // Dhaka




75.Delete a property from an object.


// Object
const student = {
  name: "Ratul",
  age: 21,
  department: "CSE"
};

console.log("Before deleting:");
console.log(student);

// Delete the age property
delete student.age;

console.log("After deleting:");
console.log(student);




80.Convert array to an object.

const arr = ["Apple", "Banana", "Orange"];

const obj = Object.assign({}, arr);

console.log(obj);



88.Change image source on button click.

<!DOCTYPE html>
<html>
<head>
    <title>Change Image</title>
</head>
<body>

    <img id="myImage" src="image1.jpg" alt="Image" width="300">

    <br><br>

    <button onclick="changeImage()">Change Image</button>

    <script>
        function changeImage() {
            document.getElementById("myImage").src = "image2.jpg";
        }
    </script>

</body>
</html>


89.Add a class to an element.

<p id="text">Hello, World!</p>


const element = document.getElementById("text");

// Add a class
element.classList.add("highlight");




91.Get current date and time.

let currentDateTime = new Date();

console.log(currentDateTime);


92.Generate a random number.

const randomNumber = Math.random();
console.log(randomNumber);



95.Use setInterval() to print numbers.

let count = 1;

const interval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(interval); // Stop the interval
  }
}, 1000); // 1000 ms = 1 second



96.Check if a variable is an array.


let value = [1, 2, 3];

if (Array.isArray(value)) {
    console.log("It is an array.");
} else {
    console.log("It is not an array.");
}


97.Clone an array.


let originalArray = [10, 20, 30, 40];

let clonedArray = [...originalArray];

console.log(clonedArray);




100. Print “Hello World” in the console.

console.log("Hello World");
