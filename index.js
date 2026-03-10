// 1. Declare a variable and assign a number.
// let myNumber = 18 


// 2. Declare a variable and assign a string.
// let myString = "I'm Riyadul Islam Ratul"


// 3. Declare a variable and assign a boolean.
// let myBoolean = false


// 4. Check the data type of a variable.
// console.log(myBoolean)


// 9. Declare a constant and try to reassign it.
// const myConstant = 3.1416


// 11.Check if a number is positive or negative.
// const num = 5
// if (num > 0) {
//     console.log("Positive Number")
// } else {
//     console.log("Negative Number")
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
const value1 = 5;
const value2 = "5";
if (value1 == value2) {
    console.log("Values are Equal");
} else {    console.log("Values are Not Equal");
}

// 15.Check if two values are equal using ===.
if (value1 === value2) {
    console.log("Values are Strictly Equal");
} else {    console.log("Values are Not Strictly Equal");
}

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


// 27.Reverse a number using a loop.
// let number = 12345;
// let reversedNumber = 0;
// while (number > 0) {
//     let digit = number % 10;
//     reversedNumber = reversedNumber * 10 + digit;
//     number = Math.floor(number / 10);
// }
// console.log(`Reversed Number: ${reversedNumber}`);


// 29.Print Fibonacci series up to n terms.
let n = 10;
let a = 0, b = 1, nextTerm;
console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}