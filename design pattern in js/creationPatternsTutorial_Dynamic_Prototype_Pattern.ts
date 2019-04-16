//dynamic prototype pattern
var peopleDynamicProto = function (name, age, state) {
  this.age = age;
  this.name = name;
  this.state = state;

  if (typeof this.printPerson !== 'function') {
    peopleDynamicProto.prototype.printPerson = function () {
      console.log(`${this.name}, ${this.age}, ${this.state} `);
    };
  }
};

var person1 = new peopleDynamicProto('mnm', 22, 'Banglore');
person1.printPerson();

console.log('name' in person1);
console.log('in intance ', person1.hasOwnProperty('name'));