/* 
There are two types of data types

1. Primitive Data Types
	String

	Number

	BigInt

	Boolean

	Symbol

	Undefined

	Null

2. Non‑Primitive Data Types

	Object (including Array, Function, Date, etc. )

*/

// ---------- STRING DATA TYPE -------------
//  Literals are enclosed in single, double, or back‑tick quotes

let greeting = "Hello, world!";
let name = "John";
let template = `Value: ${42}`;

typeof greeting; // string

// ----------- NUMBER DATA TYPE -----------
// Supports special values like - NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY
// Numeric limits: safe integers between -(2^53 – 1) and 2^53 – 1.

let pi = 3.14;
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; //-9007199254740991
Number.POSITIVE_INFINITY; //Infinity
Number.NEGATIVE_INFINITY; //-Infinity

// -------------- BigInt ----------------
// Arbitrary‑precision integers, denoted by an n suffix or the BigInt() constructor

const big = 123456789768012345678901234567890n;
typeof big; // bigint

typeof BigInt(12341354123324255415); // bigint

// -------------- BOOLEAN ----------------
// Represents a logical entity and can have two values: true or false
// Commonly used in if else statement
let isTrue = true;
let isFalse = false;
typeof isTrue; // boolean
typeof isFalse; // boolean
