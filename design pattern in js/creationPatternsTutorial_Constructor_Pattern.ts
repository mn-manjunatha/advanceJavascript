// constructor pattern
var peopleConstructor = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state} `);
  };
}

var person1 = new peopleConstructor('mnm', 22, 'Banglore');
var person2 = new peopleConstructor('rao', 25, 'Shimoga');

person1.printPerson();
person2.printPerson();