//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
  this.name = name;
  this.age = age;
}
// class Person{
//   constructor (name, age){
//   this.name = name;
//   this.age = age;
//   }
// }
//Now create three instances of Person with data you make up

  //code here
let me = new Person('tina', 25)
let sis = new Person('sky', 12 )
let bro = new Person('lucas', 5)

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function () {
  // alert(`My name is + ${this.name}`)
  alert(this.name)
  //console.log(alert)
}
