function outerFunction() {
    let name = 'John';
  
    function closureFunction() {
  
      // this is stored as a reference and will update whenever this variable is changed.
      console.log(name);
    }
  
    // this will update the 'name' variable inside the "innerFunction" even though inner function was constructed before the reassignment
    name = 'Chris';
  
    return closureFunction;
  }
  
  const c = outerFunction(); // Also, here we can access the name variable even though the context of it has already been executed, because the closure persists all of the variables used inside it.
  
  c();