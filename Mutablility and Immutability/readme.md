# Mutable and Immutable Data Types in JavaScript

## Primitive (Basic) Data Types (Immutable):

- String
- Number
- Boolean
- Undefined
- Null
- NaN
- etc.

## Non-Primitive (Complex) Data Types (Mutable):

- Array
- Object
- Function
- etc.

## Mutable and Immutable Data Types in JavaScript

### Mutable Data Types:

In JavaScript, there are two types of data: Mutable data types and Immutable data types.

#### Immutable Data Types:

Immutable data types are those whose value cannot be mutated or changed in-place after creation. Instead, their value can be reassigned, creating a new instance each time, and any reassignment will not reflect other variables if the variable which has been reassigned a value was used somewhere else by a reference.

#### Mutable Data Types:

Mutable data types, when stored in a variable after creation, do not point directly to their value. Instead, they point to an address, and JavaScript accesses the stored value through this address.

The values of mutable data types are accessed through addresses. Therefore, when we assign a pre-existing object to a new variable and make changes using the new variable, the changed result is reflected wherever the object's reference is used. This is because all references point to the same value through addresses.

Mutable data types are stored in the Heap because dynamic data requires flexibility in memory allocation, and it's not possible to predict in advance how much memory data will need. Memory allocation in the Heap can be adjusted based on the growth or reduction of data.
