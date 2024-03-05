### Roman Urdu:

- Closure k through koi function apne outer scope me se wo variable jo k us function k andr use huwe hon, un variables k context (scope) ki execution complete hony k baad bhi persist kr skta hai. 
- Closure k through variables unke scope ki execution k baad bhi use hoskty hain. 
- Variables Garbage Collection k through apne scope ya context ki execution k baad memory se release hojaty hai usually agr wo kisi closure se related ya connected na hon.
- Or jis closure me variables use hotay hain wo reference k through store hoty hain na k uski value ki through, even tab bhi jab variable ki data type Immutable ho.

---

### English:

- Closure allows a function to retain and persist some variables from its outer scope, even after the execution of that variables' scope has completed.
- Through closure, variables can still be accessed and used even after the execution of their scope has finished.
- Variables are usually released from memory through Garbage Collection after their scope's exection, if they are not connected or related to any closure.
- The closure stores the reference to the variables it uses, not their values, even when the variable's data type is Immutable.
