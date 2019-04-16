
// prototype pattern
var peopleProto = function () {

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'no name';
peopleProto.prototype.state = 'no state';

peopleProto.prototype.printPerson = function () {
  console.log(`${this.name}, ${this.age}, ${this.state} `);
};

var person1 = new peopleProto();
//person1.name = 'mnm';
person1.age = 22;
person1.state = 'Banglore';

//person1.printPerson();

console.log('name' in person1);
console.log('xxx' in person1);
console.log('age' in person1);

//to check whether instance has property
console.log('in intance ', person1.hasOwnProperty('name'));
console.log('in intance ', person1.hasOwnProperty('age'));


//console.dir(peopleProto);

