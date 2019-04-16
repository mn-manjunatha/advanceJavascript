//factory pattern
var peopleFactory = function (name, age, state) {
  var temp = {};
  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state} `)
  };

  return temp;

};

var person1 = peopleFactory('mnm', 23, 'Banglore');
var person2 = peopleFactory('rao', 25, 'Shimoga');

person1.printPerson();
person2.printPerson();