// Adding two numbers
// A funciton called addNumbers takes two numbers and return the sum of the two numbers
const addNumbers = function (a, b) {
  return a + b;
};

console.log(addNumbers(3, 5)); // 8
console.log(addNumbers(10, 20)); // 30

// creating a function of name greet and it takes a parameter name and return "Hello name"
const greet = function (name) {
  console.log("Hello ", name);
};

greet("Dhitiraj Sarma");

// Creating a function that check a number is even or odd
const isEven = function (number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(4)); //  even
console.log(isEven(5)); // odd

// Creating a function that check that a string is Palindrome or not

function isPalindrome(str) {
  // 1. Normalize: lowercase all letters
  const lower = str.toLowerCase();

  // 3. Split into characters
  const chars = lower.split("");

  // 4. Reverse the array
  const reversedChars = chars.reverse();

  // 5. Join back into a string
  const reversed = reversedChars.join("");

  // 6. Compare cleaned string to its reverse
  return lower === reversed;
}

console.log(isPalindrome("rtr")); // true
console.log(isPalindrome("Hello")); // false