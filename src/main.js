// Prototype

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('boyoung')
console.log(me.greet())
console.log(me.study())

console.log(me instanceof Student)
console.log(me instanceof Person)

/* instanceof를 통해 어떤것들이 만들어졌는지 확인 가능*/
const anotherPerson = new Person('Foo')
console.log(me instanceof Student)
console.log(me instanceof Person)
