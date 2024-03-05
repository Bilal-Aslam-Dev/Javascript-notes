
Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. Instead of providing all the arguments at once, currying allows you to partially apply arguments and create a chain of functions, each taking one argument.

```
// Non-curried function
function add(x, y, z) {
  return x + y + z;
}

// Curried version
function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

// Usage of curried function
const result = curryAdd(1)(2)(3);
console.log(result); // Output: 6
```
