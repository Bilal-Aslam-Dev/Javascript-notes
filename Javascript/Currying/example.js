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
