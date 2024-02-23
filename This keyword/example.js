
// Example #1

const myObjectWithArrowFunction = {
  value: 42,

  method: () => {
    console.log('Arrow Function:', this.value); // value of 'this' will be inherited from the outer (enclosing) scope which is global scope because this method is a direct method of this object this, not nested.
  }
}

myObjectWithArrowFunction.method(); // Outputs: Arrow Function: undefined


/////// - ///////

// Example #2

const myObjectWithRegularFunction = {
  value: 42,

  method: function() {
    console.log('Regular Function:', this.value); // 'this' will be referencing to myObjectWithRegularFunction object 
  }
}

myObjectWithRegularFunction.method(); // Outputs: Regular Function: 42

/////// - ///////


// Example #3

function InsideSetTimeoutWithArrowFunction() {
  this.value = 42;

  this.method = function () {
    setTimeout(() => {
      console.log('Arrow Function:', this.value); // 'this' is inherited from the method which is the surrounding scope of this current arrow function.
    }, 1000);
  };
}

const insideSetTimeoutwithArrowInsance = new InsideSetTimeoutWithArrowFunction();

insideSetTimeoutwithArrowInsance.method(); // Outputs: Arrow Function: 42

/////// - ///////

// Example #4

function InsideSetTimeoutRegularFunction() {
  this.value = 42;

  this.method = function () {
    setTimeout(function () {
      console.log('Regular Function:', this.value); // 'this' is undefined because the regular functions have their own 'this' object this it can not find any this.value in the current scope (which is inside setTimeout)
    }, 1000);
  };
}

const insideSetTimeoutregularInstance = new InsideSetTimeoutRegularFunction();
insideSetTimeoutregularInstance.method(); // Outputs: Regular Function: undefined

/////// - ///////

