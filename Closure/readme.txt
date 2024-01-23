Roman Urdu:

● Closure k through koi function apne outer scope me se kch variable jo k us funcion k andr use huwe hon, persist kr skta hai, even uske outer scope ki execution complete ho chuki ho. 
● Closure k through variables unke scope ki execution k baad bhi use hoskty hain. 
● Variables Garbage Collection k through memory se release hojaty hai usually agr wo kisi closure se related ya connected na hon.
● Or jis closure me variables use hotay hain wo reference k through store hoty hain na k uski value ki through, even tab bhi jab variable ki data type Immutable ho.


English:

● Closure allows a function to retain and persist some variables from its outer scope, even after the execution of that outer scope has completed.
● Through closure, variables can still be accessed and used even after the execution of their scope has finished.
● Variables are usually released from memory through Garbage Collection, especially if they are not connected or related to any closure.
● The closure stores the reference to the variables it uses, not their values, even when the variable's data type is immutable.