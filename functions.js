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

// Reverse a Number

function reverseNumber(num) {
  var reversed = 0;

  while (num !== 0) {
    var digit = num % 10; // Get the last digit
    reversed = reversed * 10 + digit; // Append it to reversed
    num = Math.floor(num / 10); // Remove the last digit
  }

  return reversed;
}

console.log(reverseNumber(1234)); // 4321

// Reverse a String

// first build it using loop, no built in function
function reverseString(str) {
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add characters from the end
  }

  console.log(reversed);
}

reverseString("Hello"); // olleH

// now build it using built in functions

function reverseStringBuilt(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}

reverseStringBuilt("Javascript"); //tpircsavaJ

// Finding the Fibonacci sequence

// We will find this using Recursive Function
function fibonacci(n) {
  if (n < 2) {
    return n; // For numbers less than 2 it gives us the same result
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
  // For number grater than 2 it add the previous two numbers (for 3, it add fibonacci(2) : 1 + fibonacci(1) : 1 => so answer is 2)
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
