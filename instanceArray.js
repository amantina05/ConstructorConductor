/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
// let users = [['Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'], ['Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'], ['Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'], []]
let users = []

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
users[0] = {
  name: 'Tyler',
  email: 'tylermcginnis33@gmail.com',
  pw: 'iLoveJS'
}
users[1] = {
  name: 'Cahlan',
  email: 'cahlan@devmounta.in',
  pw: 'iLoveHashtags'
}
users[2] = {
  name: 'Lenny',
  email: 'lenny@theLenster.com',
  pw: 'iLoveLentilSoup'
}
console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
users[3] = {
  name: 'Tina',
  email: 'tina@gmail.com',
  pw: 'iLoveCheese'
}
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
for (let i = 0; i < users.length; i++){
  let curr = users[i]
  console.log(curr)
  console.log(curr.name)
}
