// Categories of Operators

// Arithmetic Operators
// Arithmetic operators perform mathematical calculations on numeric values or variables.

/*
+ (Addition)

- (Subtraction)

* (Multiplication)

/ (Division)

% (Modulus)

** (Exponentiation, ES2016+)

++ (Increment)

-- (Decrement) 
*/

// Addition (+)
let sum1 = 5 + 3; // 8
let sum2 = 10 + 20; // 30

// Subtraction (-)
let diff1 = 10 - 4; // 6
let diff2 = 7 - 15; // -8

// Multiplication (*)
let prod1 = 6 * 3; // 18
let prod2 = 2 * 8; // 16

// Division (/)
let div1 = 12 / 4; // 3
let div2 = 15 / 2; // 7.5

// Modulus (%)
let mod1 = 10 % 3; // 1
let mod2 = 14 % 5; // 4

// Exponentiation (**)
let exp1 = 2 ** 3; // 8
let exp2 = 5 ** 2; // 25

// Increment (++)
let a = 5;
a++; // 6
let b = 10;
++b; // 11

// Decrement (--)
let c = 5;
c--; // 4
let d = 10;
--d; // 9

// Assignment Operators
// Assignment operators assign values to variables, often by combining an operation with the simple assignment (=)
/*
= (Simple assignment)

+=, -=, *=, /=, %= (Arithmetic assignments)

**= (Exponentiation assignment)
*/

// Simple assignment (=)
let x = 10;
let y = "hello";

// Addition assignment (+=)
let num1 = 5;
num1 += 3; // 8
let str1 = "Hi, ";
str1 += "there!"; // "Hi, there!"

// Subtraction assignment (-=)
let num2 = 10;
num2 -= 4; // 6
let num3 = 20;
num3 -= 15; // 5

// Multiplication assignment (*=)
let num4 = 6;
num4 *= 3; // 18
let num5 = 2;
num5 *= 8; // 16

// Division assignment (/=)
let num6 = 12;
num6 /= 4; // 3
let num7 = 15;
num7 /= 2; // 7.5

// Modulus assignment (%=)
let num8 = 10;
num8 %= 3; // 1
let num9 = 14;
num9 %= 5; // 4

// Exponentiation assignment (**=)
let num10 = 2;
num10 **= 3; // 8
let num11 = 5;
num11 **= 2; // 25

// Comparison Operators
// Comparison operators are used to compare two values and return a boolean result.

/*
==   (Equal to, loose equality)
===  (Strict equal to)
!=   (Not equal to, loose inequality)
!==  (Strict not equal to)
>    (Greater than)
<    (Less than)
>=   (Greater than or equal to)
<=   (Less than or equal to)
*/

// Equal to (==)
console.log(5 == "5"); // true (values are equal, type is not checked)
console.log(10 == 10); // true

// Strict equal to (===)
console.log(5 === "5"); // false (type is checked)
console.log(10 === 10); // true

// Not equal to (!=)
console.log(7 != "8"); // true
console.log(10 != 10); // false

// Strict not equal to (!==)
console.log(7 !== "7"); // true
console.log(10 !== 10); // false

// Greater than (>)
console.log(8 > 5); // true
console.log(3 > 7); // false

// Less than (<)
console.log(2 < 5); // true
console.log(10 < 3); // false

// Greater than or equal to (>=)
console.log(6 >= 6); // true
console.log(4 >= 9); // false

// Less than or equal to (<=)
console.log(3 <= 3); // true
console.log(8 <= 2); // false

// Logical Operators
// Logical operators are used to combine or invert boolean values.

/*
&&   (Logical AND)
||   (Logical OR)
!    (Logical NOT)
*/

// Logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false

// Logical OR (||)
console.log(false || true); // true
console.log(false || false); // false

// Logical NOT (!)
console.log(!true); // false
console.log(!false); // true

// Bitwise Operators
// Bitwise operators perform operations on binary representations of numbers.

/*
&   (Bitwise AND)
|   (Bitwise OR)
^   (Bitwise XOR)
~   (Bitwise NOT)
<<  (Left shift)
>>  (Sign-propagating right shift)
>>> (Zero-fill right shift)
*/

// Bitwise AND (&)
console.log(5 & 3); // 1   (0101 & 0011 = 0001)
console.log(12 & 7); // 4   (1100 & 0111 = 0100)

// Bitwise OR (|)
console.log(5 | 3); // 7   (0101 | 0011 = 0111)
console.log(12 | 7); // 15  (1100 | 0111 = 1111)

// Bitwise XOR (^)
console.log(5 ^ 3); // 6   (0101 ^ 0011 = 0110)
console.log(12 ^ 7); // 11  (1100 ^ 0111 = 1011)

// Bitwise NOT (~)
console.log(~5); // -6  (inverts all bits)
console.log(~0); // -1

// Left shift (<<)
console.log(5 << 1); // 10  (0101 << 1 = 1010)
console.log(3 << 2); // 12  (0011 << 2 = 1100)

// Sign-propagating right shift (>>)
console.log(8 >> 2); // 2   (1000 >> 2 = 0010)
console.log(-16 >> 2); // -4

// Zero-fill right shift (>>>)
console.log(8 >>> 2); // 2   (1000 >>> 2 = 0010)
console.log(-16 >>> 2); // 1073741820
