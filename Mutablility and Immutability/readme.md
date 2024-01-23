## Mutable and Immutable Data Types in JavaScript

### Primitive (Basic) Data Types (Immutable):

- String
- Number
- Boolean
- Undefined
- Null
- NaN
- etc.

### Non-Primitive (Complex) Data Types (Mutable):

- Array
- Object
- Function
- etc.

### Roman Urdu:

- Javascript mein 2 tarhan k data types hoty hain, Mutable data types or Immutable data types
- Immutable data types wo hoty hain jinki value creation k baad mutate ya change nai hoskti in-place, unhein value re assign ki jaskti hai, jo k hr dfa ek new instance create krti hai or wo new  value baaki places pr change nai hogi agr hum kahin reference use krrhe hon us variable ka.
- Mutable data types ko jab hum create krke ek variable me store krte hain to wo variable uski value ko point nai krrha hota, balke ek address ko point krrha hota hai, jis address k zariye javascript us stored value ko access krta hai.
- Mutable data types ki value address k through access hoti hai isi liye jab hum ek new variable ko pehle se bana hua object assign kr dein, or phir new variable ko use krte huwe hum us object me kuch changes karengy to jahan jahan us object ka reference use hua hai har jga changed result milega kyun k saray refrences ek hi value ko point kar rhe hoty hain address k through.
- Mutable data types ki values Heap me store hoti hain kyun k humein dynamic data chahiye hota hai or humein pta nai hota k data kitna grow krega to hum usy ek predefined memory nahi allot kr skte hain. Heap me memory allotment data ko dekhte huwe increase or descrease hoskti hai.

### English:

- In JavaScript, there are two types of data: Mutable data types and Immutable data types.
- Immutable data types are those whose value cannot be mutated or changed in-place after creation. Instead, their value can be reassigned, creating a new instance each time, and any reassignment will not reflect other variables if the variable which has been reassigned a value was used somewhere else by a reference.
- Mutable data types, when stored in a variable after creation, do not point directly to their value. Instead, they point to an address, and JavaScript accesses the stored value through this address.
- The values of mutable data types are accessed through addresses. Therefore, when we assign a pre-existing object to a new variable and make changes using the new variable, the changed result is reflected wherever the object's reference is used. This is because all references point to the same value through addresses.
- The values of mutable data types are stored in the Heap because dynamic data requires flexibility in memory allocation, and it's not possible to predict in advance how much memory data will need. Memory allocation in the Heap can be adjusted based on the growth or reduction of data.
