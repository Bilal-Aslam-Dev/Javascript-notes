/// example #1 ///

function outerFunction() {
    console.log("Entering outerFunction");
    innerFunction(); // Calling innerFunction within outerFunction
    console.log("Exiting outerFunction");
}

function innerFunction() {
    console.log("Inside innerFunction");
}

outerFunction(); // Calling outerFunction

// //
