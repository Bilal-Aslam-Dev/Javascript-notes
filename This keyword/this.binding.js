// Usage of "this" with .call() //

const person = {
  name: 'Alice',
  greet: function (city) {
    console.log(`Hello, my name is ${this.name}, and I live in ${city}.`)
  },
}

const anotherPerson = {
  name: 'Bob',
}

person.greet.call(anotherPerson, 'Wonderland')
// Outputs: Hello, my name is Bob, and I live in Wonderland.

//

// Usage of "this" with .apply() //

const numbers = [1, 2, 3, 4, 5]

function sum() {
  return this.reduce((acc, num) => acc + num)
}

const total = sum.apply(numbers)
console.log(total) // Outputs: 15

//

// Usage of this with .bind() //

const dog = {
  sound: 'Woof!',
  bark: function () {
    console.log(this.sound)
  },
}

const cat = {
  sound: 'Meow!',
}

const dogBark = dog.bark.bind(dog)
const catBark = dog.bark.bind(cat)

dogBark() // Outputs: Woof!
catBark() // Outputs: Meow!

//
