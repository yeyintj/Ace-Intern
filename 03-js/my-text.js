//Part 1

// Example for var
// function testVar() {
//   var x = 10;
//   console.log("Inside function:", x); // Output: Inside function: 10
// }
// testVar();
// console.log("Outside function:", x); //output will not get and it will get an error 'Uncaght RefrenceError' because var variable is defined in a function it's mean the scope was limited to get output.



//example for let
//{
  //  let y = 20;

    //console.log("Inside block: ", y);//output will be 20.
//}
//console.log("Outside block: ", y);//output will not get and it will get an error 'not defined' because let variable is a block scope varibale and let can call it's block but outside of block.


//example for const
// const z = 30;
// console.log("Initial value: ", z);//output will be 30.
// z = 40;//output will not get, it's will get an eror 'Assignment to constant variable' because z declared a variable called const so z can't change that value to another.


//Part 2
//if a function declared with function expresstion and then it's called function statemnet
//Function Declaration(statement)

// function greed(name){
//     console.log("Hello", name);
// }
// greed("yairyint");

//Function Expression(expression)

// const greetExpression = (name) => {
//     console.log(name);
// }
// greetExpression("yairyint");

//Immediately Invoke Function
// (function(x, y) {
//   let sum = x+y;
//   console.log(sum)
// })(5,10);

//Part-3 Object

//Object Creation and Property Access
// const student = {
//     name: "yairyint",
//     age: 22,
//     course: "javascript",
// };

// console.log(`My name is ${student.name}. I'm ${student.age} years old. Joint ${student.course} course.`);

//Object Methods
// const student = {
//       name: "yairyint",
//       age: 22,
//       course: "javascript",
//       introduce(){
//         console.log(`Hi! I am ${this.name} and I am ${this.age} years old. `)
//       }
//   };
//   student.introduce();


//Logic Application: Object Manipulation
// function updateStudent(object,key, value){
//   const updateStudent = {...object};
//     updateStudent[key] = value;

//     return updateStudent;
// }
// console.log(updateStudent(student, "gender", "male"));

//Filtering Falsy Values
// const mixedArr = [1,0,"hello","",true,false,null,5,NaN,6,undefined,3];

// const truthy = function(arr){
//   return arr.filter(Boolean);
// }

// const result = truthy(mixedArr);

// console.log(result);

//Checking Truthy and Falsy
// const isTruthyOrFalsy = (num)=>{
//   const falsy = [null, undefined, "", NaN , 0];
//   if(falsy.includes(num)){
//       console.log("It's Falsy");
//   }else{
//       console.log("It's Truthy");
//   }
// }

// isTruthyOrFalsy("")

//Common Logic Functions

//Checking Even or Odd
// function isEve(num){
//   if(num%2 == 0){
//     console.log("Event")
//   }else{
//     console.log("Odd")
//   }
// }
// isEve(1);

//Reversing a String
// function reverseString(str){
//   let result = "";
//   for(let i=str.length-1; i>=0; i--){
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverseString("yair yint"));

//Checking Palindrome
// const isPalindrome  = (str) => {
//   let isName = str.length - 1;

//   for(let i=0; i < str.length / 2; i++){
//     if(str[i] != str[isName]){
//       return false;
//     }
//     isName--;
//   }
//   return true;
// }
// console.log(isPalindrome("hello"));


//Checking Leap Year

// const isLeapYear = (year) => {
//   if(year%400 == 0){
//     console.log("Leap Year");
//   }else{
//     console.log("Not a leap year");
//   }
// }
// isLeapYear("2024")

//Finding Maximum Number
// const array = [12,3,5,9];
// const findMax = (arr) => {
//   let max = 0;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i]
//     }
//   }
//   return max;
// }
// console.log(findMax(array));

// Counting Vowels

// const countVowels = function(str){
//  const vowels = ["a","e","i","o","u"]
//   let count = 0;

//   str.split("").forEach((char) => {
//     if( vowels.includes(char)){
//       count++;
//     }
//   });
  
//   return count;
// }

// console.log(countVowels("hello world"))

//Capitalizing Words

// const capitalizeWords = (str)=>{
//   let name = str.split(" ");
//   for(let i=0; i<name.length; i++){
//     name[i]=name[i][0].toUpperCase()+name[i].slice(1);
    

//   }
//   return name.join(" ");
  
// }

// console.log(capitalizeWords("hello world"));

//Calculating the Sum of an Array

// const sumArray = (arr)=>{
//   let sum = 0;

//   for(let i=0; i<arr.length; i++){
//     //console.log(arr)
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray([2,3,5,]));

//Finding the Longest Word in a Sentence
// const findLongestWord = (sentence)=>{
//     const words = sentence.split(" ");
//     let longestWord = null;

//     for(let i=0; i<words.length; i++){
//       if(words[i].length > longestWord ){
//         longestWord = words[i].length;
//       }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("hello myanmar"));


///Repratice///

//Checking Even or Odd

// const isEven = (num) =>{

//   if(num%2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isEven(4))

//Reversing a String
// const reverseString = (str)=>{
//   let name = str.split("").reverse().join("");

//   return name;
// }
// console.log(reverseString("hello"))

//Checking Palindrome
// const isPalindrome = (str)=>{
//   const repExp = /[\W_]/g; //use the RegExp to remove unwanted characters
//   let lowerCase = str.toLowerCase().replace(repExp,''); 
//   const strReverse = lowerCase.split("").reverse().join("");

//   if(strReverse === lowerCase){
//     return true;
//   }else{
//     return false;
//   }
//   //return lowerCase;
// }
// console.log(isPalindrome("A man, a plan, a canal. Panama"));

//Checking Leap Year
// const isLeapYear = (year)=>{
//   if(year%4 === 0){
//     console.log("It's a leap year");
//   }else{
//     console.log("It's not a leap year");
//   }
// }

// isLeapYear(2023);

//Finding Maximum Number
// const findMax = (arr) => {
//   let max = 0;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([100,2,3,5,20,15]))

//Counting Vowels
// const countVowels = (str)=>{
//   const vowels = ['a','A','e','E','i','I','o','O','u','U'];
//   let vowelsCount = 0;

//   for(let char of str){
//     if(vowels.includes(char)){
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

// console.log(countVowels("hello wrold"));

//Capitalizing Words
// const capitalizeWords = (str)=>{
//   const words = str.split(" ");
  
//   for(let i=0; i<words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// }
// console.log(capitalizeWords("hello world"));

//Calculating the Sum of an Array
// let array = [12,3,4,6,5];
// const sumArray = (arr)=>{
//   let sum = 0;
//   for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray(array));

// Finding the Longest Word in a Sentence
const findLongestWord = (sentence)=>{
  const words = sentence.split(" ");
  let longestWord = null;

  for(let i = 0; i<words.length; i++){
    if(words[i].length > longestWord){
      longestWord = words[i].length;
      console.log(longestWord);
    }
  }
  return longestWord;
}
console.log(findLongestWord("hell myanmar"));