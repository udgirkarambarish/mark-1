const chalk = require('chalk');
// const chalkAnimation = require('chalk-animation')
var readlineSync = require('readline-sync');

let score = 0;
let userAnswer;

userName = readlineSync.question("Name : ");
console.log("Hey " + chalk.blue.bold(userName) + "!");
console.log("Let's check if you know me well...");
console.log("---------------------------");

let ques = [
  {
    q: "I am an engineering student",
    a: true
  },
  {
    q: "I like to play volleyball",
    a: false
  },
  {
    q: "I love to shout 'suii...!'",
    a: true
  },
  {
    q: "I like Messi",
    a: true
  },
  {
    q: "I don't like to read books",
    a: false
  }
]

function quiz(q, a, i) {
  if (q[i].a === a) {
    console.log(chalk.greenBright.bold("Correct! :)"));
    score++;
  } else {
    console.log(chalk.red.bold("Wrong! :("));
  }
  console.log("Your current score : " + score);
  console.log("---------------------------");
}

for (let i = 0; i < 5; i++) {
  userAnswer = readlineSync.keyInYNStrict(ques[i].q);
  quiz(ques, userAnswer, i);
}

console.log(chalk.italic.bgBlue("You did well!"));




