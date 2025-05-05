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








// -------------- SYMBOL -----------------
// A unique and immutable primitive value, often used as object property keys
// Symbols are created using the Symbol() function
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1); //Symbol(description)
// Symbols are unique, even if they have the same description
// They are not equal to each other
// Symbols are not equal to strings, numbers, or any other type

sym1 === sym2; // false
typeof sym1; // symbol
typeof sym2; // symbol
// Symbols are not automatically converted to strings
String(sym1); // "Symbol(description)"
// Using symbols as object keys
let obj = {
  [sym1]: "value1",
  [sym2]: "value2",
};
obj[sym1]; // "value1"
obj[sym2]; // "value2"
// Symbols are not enumerable in for...in loops
for (let key in obj) {
  console.log(key); // No output
}








// -------------- UNDEFINED --------------
// A variable that has been declared but not assigned a value is undefined
// Undefined is a primitive value
let x;
typeof x; // undefined
console.log(x); // undefined
// Undefined is a falsy value








// -------------- NULL --------------------
// A special value that represents the absence of a value or object
let y = null; // y is explicitly set to "no value"
console.log(y); // null
console.log(typeof y); // "object" (this is a known quirk in JavaScript)

// Example use case:
let person = {
  name: "John",
  age: 30,
  address: null, // Address is intentionally left as "no value"
};

console.log(person.address); // null












// ---------------- Non-Primitive Data Types ----------------
// ---------------- OBJECT ----------------
// Objects are collections of key-value pairs
// Objects can be created using object literals, constructors, or classes ({}, new Object(), class, Array, function, date, etc.)
// Object literals are the most common way to create objects
const user = {
  name: "John",
  age: 30,
  isStudent: false,
};
// Accessing object properties
console.log(person.name); // "John"
console.log(person["age"]); // 30
// Adding properties to an object
user.address = "123 Main St";
user["isStudent"] = true;
// Deleting properties from an object
delete user.age;
// Checking if a property exists in an object
console.log("name" in user); // true
console.log("age" in user); // false
// Iterating over object properties
for (let key in user) {
  console.log(key, user[key]);
}
// Output:
// name John
//isStudent true
//address 123 Main St

// Object methods
// Object.keys() - returns an array of the object's keys
const keys = Object.keys(user);
console.log(keys); // ["name", "isStudent", "address"]
// Object.values() - returns an array of the object's values
const values = Object.values(user);
console.log(values); // ["John", true, "123 Main St"]
// Object.entries() - returns an array of the object's key-value pairs
const entries = Object.entries(user);
console.log(entries); // [["name", "John"], ["isStudent", true], ["address", "123 Main St"]]
// Object.assign() - copies properties from one or more source objects to a target object
const target = {};
const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };
Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 4 }
// Object.freeze() - prevents modifications to an object
const frozenUser = Object.freeze(user);
// frozenUser.name = "Jane"; // Error: Cannot assign to read only property 'name' of object '#<Object>'
// Object.seal() - prevents adding or removing properties from an object, but allows modifying existing properties
const sealedUser = Object.seal(user);
// sealedUser.name = "Jane"; // Allowed
// sealedUser.address = "456 Elm St"; // Error: Cannot add property address, object is not extensible
// sealedUser.age = 30; // Error: Cannot add property age, object is not extensible
// Object.is() - compares two values for equality
console.log(Object.is("foo", "foo")); // true
console.log(Object.is("foo", "bar")); // false
console.log(Object.is({}, {})); // false (different objects)
console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true
// Object.create() - creates a new object with the specified prototype object and properties
const proto = { greet: function () { console.log("Hello!"); } };
const newObj = Object.create(proto);
newObj.greet(); // "Hello!"
