//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here


//Create a quizUsers Array which is going to hold all of our users.

  //code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here


//Create a questions Array which is going to hold all of our questions

  //code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here


//Now push all of your instances of Question into the questions Array

  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here


function QuizUser (name, email, password, totalScore) {
  this.name = name
  this.email = email
  this.password = password
  this.totalScore = totalScore
}

function Question (title, answersArray, rightAnswer, difficulty) {
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;
}

let quizUsers = []
quizUsers[0] = new QuizUser('tina', 'tina@gmail.com', 'tina123', 0)
quizUsers[1] = new QuizUser('a', 'a', 'a', 0)
quizUsers[2] = new QuizUser('b', 'b', 'b', 0)


let questions = []
questions[0] = new Question('question1', [true], 'true', 'easy')
questions[1] = new Question('', [], '', '')
questions[2] = new Question('', [], '', '')

