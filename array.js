// 1. Sum of the elements of an array
const arr = [1, 2, 3, 4, 5, 6, 10]; // Give array

var sum = 0; // Initialize a variable sum with value 0

for (let index = 0; index < arr.length; index++) {
  // running the for loop from 0 to 6
  sum = sum + arr[index]; // adding each element on sum variable
}

console.log(sum); // 31
