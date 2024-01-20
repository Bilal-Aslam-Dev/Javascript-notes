/// Mutable Example #1 - Object ///

// Creating a mutable object
let mutableObject = { value: "original" };

// Creating a new variable referencing the same object
let referenceObject = mutableObject;

// Mutating the object using the second variable
referenceObject.value = "changed";

// Logging the first variable to show the change
console.log(mutableObject); // Output: { value: "changed" }

// //

/// Immutable Example #2 - String ///

// Creating an immutable string
let immutableString = "original";

// Creating a new variable referencing the same string
let referenceString = immutableString;

// Mutating the string using the second variable
referenceString = "changed";

// Logging the first variable to show that it remains unchanged
console.log(immutableString); // Output: "original"

// //
