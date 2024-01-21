/// Example #1 - Local Variable ///

function example1() {
    // Local variable
    let localVariable = "I am local";
    console.log(localVariable); // Accessing local variable within the function
}

example1(); // Output: "I am local"

// Attempting to access the local variable outside the function will result in an error
console.log(localVariable); // ReferenceError: localVariable is not defined

// //

/// Example #2 - Global Variable ///

// Global variable
let globalVariable = "I am global";

function example2() {
    console.log(globalVariable); // Accessing global variable within a function
}

example2(); // Output: "I am global"

// Global variable can also be accessed outside the function
console.log(globalVariable); // Output: "I am global"
