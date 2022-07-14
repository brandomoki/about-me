'use strict';

let siteVisitor = prompt('What is your name?');
let score = 1;
alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

let questionOne = prompt('Yes or No...Do I have Children?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct');
  score++;
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionTwo = prompt('Have I ever jumped from an airplane?').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are correct. I was a Paratrooper');
  score++;
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionThree = prompt('Was I ever in the Military?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('You are correct. I was in th US Army');
  score++;
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionFour = prompt('Do I live in the desert?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct. I live in Las Vegas, NV');
  score++;
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionFive = prompt('2+2=4? yes or no').toLowerCase();

if(questionFive === 'n' || questionFive === 'no'){
  alert('You are wrong!');
  score++;
} else if(questionFive === 'y' || questionFive === 'yes'){
  alert('WowZer! You really know your stuff.');
} else{
  alert('Answer yes or no');
}

let attempts = 4;
const age = 32;
let questionSix;

while (attempts){
  questionSix = Number(prompt('Guess my Age between 25-35'));
  if (questionSix === age)
  {
    score++;
    alert('Great Scott!');
   break;
  } else
  {
    attempts--;
    if (attempts <= 0)
    {
      alert('Not the best guesser are we? I am ' + age + ' years old.');
    } else if (questionSix > age)
    {
      alert('Too high!');
    } else if (questionSix < age)
    {
      alert('Too low!');
    }
  }
}

attempts = 6;
let userResponse = score;
// let questionSeven;
let arrayOne = ['red', 'blue', 'black', 'green'];
while (attempts && userResponse === score){
  let questionSeven = prompt('What colors am I thinking of?').toLowerCase();

  for (let i = 0; i < arrayOne.length; i++)
  {
    if (arrayOne[i] === questionSeven){
      score++;
      break;
    }
  }
  if (userResponse === score){
    alert('Try again, sucka!');
  }
}
if (attempts === 0){
  alert('GameOver!!!');
}

alert('By gum, you\'ve done it!');

alert('All possible answers - ' + arrayOne);

alert('Congrats you got ' + score + ' answers correct');

alert('Congrats you got ' + score + ' answers correct');