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

// Reverse an array

// using built in functions
function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]

// without using build in function

function reverseArray(arr) {
  const reversed = []; // Initialize a empty array

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // pushing element from the last element of err into reversed array
  }

  return reversed; // return the reversed array
}

console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]

//// ADDING AN ELEMENT TO AN ARRAY FROM (START AND LAST)

// ADDING FROM LAST
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array); // Output: [ 1, 2, 3, 4, 5, 6 ]

// ADDING FROM FIRST
array.unshift(0);
console.log(array); // Output: [ 0, 1, 2, 3, 4, 5, 6 ]

//// REMOVING AN ELEMENT FROM AN ARRAY FROM (START AND LAST)

// REMOVE FROM LAST
array.pop();
console.log(array); // Output: [ 0, 1, 2, 3, 4, 5 ]

// REMOVE FROM FIRST
array.shift();
console.log(array); // Output: [ 1, 2, 3, 4, 5 ]

///// REMOVING THE DUBLICATE ELEMENTS FROM AN ARRAY

function removeDuplicates(arr) {
  let result = []; // To store the elements

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]); // If the element doesn't exist in the result array then push to the result array
    }
  }

  return result;
}

console.log(removeDuplicates([1, 1, 2, 3, 2, 5, 6, 7, 5])); // Output: [ 1, 2, 3, 5, 6, 7 ]

// TWO SUM

function TwoSum(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // Check if this pair already exists in pairs
        let alreadyExists = false;

        for (let k = 0; k < pairs.length; k++) {
          let a = pairs[k][0];
          let b = pairs[k][1];

          // Match regardless of order
          if (
            (a === arr[i] && b === arr[j]) ||
            (a === arr[j] && b === arr[i])
          ) {
            alreadyExists = true;
            break;
          }
        }

        if (!alreadyExists) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  }

  return pairs;
}

console.log(TwoSum([1, 2, 3, 4, 5, 6, 0, 10, -5, -1], 5)); // Output: [ [ 1, 4 ], [ 2, 3 ], [ 5, 0 ], [ 6, -1 ], [ 10, -5 ] ]
