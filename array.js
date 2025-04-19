// 1. Sum of the elements of an array
const arr = [1, 2, 3, 4, 5, 6, 10]; // Give array

var sum = 0; // Initialize a variable sum with value 0

for (let i = 0; i < arr.length; i++) {
  // running the for loop from 0 to 6
  sum = sum + arr[i]; // adding each element on sum variable
}

console.log(sum); // 31

// Fidn the Maximum Numbers of an array

// Findting without any built in funciton

function findMax(arr) {
  let max = arr[0]; // Initialize first element as Maximum Number

  for (let i = 1; i < arr.length; i++) {
    // Run the Loop from 1 to arr.length
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is greater
    }
  }

  return max;
}

console.log(findMax([10, 12, 1, 0, -1, 30, -100])); // Output: 30

// function with built in function
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
