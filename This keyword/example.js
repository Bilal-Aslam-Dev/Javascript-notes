// Example #1

function WithArrowFunction() {
    this.value = 42;
  
    this.method = function() {
      setTimeout(() => {
        console.log("Arrow Function:", this.value); // 'this' is inherited from the method
      }, 1000);
    };
}

const withArrowInsance = new WithArrowFunction();
withArrowInsance.method(); // Outputs: Arrow Function: 42

// Example #2

function RegularFunction() {
    this.value = 42;
  
    this.method = function() {
      setTimeout(function() {
        console.log("Regular Function:", this.value); // 'this' is undefined because the regular functions have their own 'this' object
      }, 1000);
    };
}

const regularInstance = new RegularFunction();
regularInstance.method(); // Outputs: Regular Function: undefined
