### Roman Urdu: 

Hoisting javascript me compiling behaviour hai jisme var keyword se define kiye huwe variables or functions keyword se define kiye huwe functions unke scope mein top pr hoist hojaty hain compiling se pehle. or var se bane variables usse pehle access karengy to undefined hongy lekin declaration se pehle kisi function k andr use krengy (or wo function var ki value assignment k baad call hua ho) to hum variable ki value access kar payengy

---

### English:

Hoisting is a behavior in JavaScript during compilation where variables declared with the var keyword and functions declared with the function keyword are moved to the top of their containing scope before the actual code execution. If a variable declared with var is accessed before its declaration, it will have the value undefined. However, if we use it inside a function which is declared before the variable (and is called after the assignment of value to that variable) the variable's value can be accessed even before its declaration inside the function.