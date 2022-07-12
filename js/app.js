'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

let questionOne = prompt('Yes or No...Do I have Children?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct');
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionTwo = prompt('Have I ever jumped from an airplane?').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are correct. I was a Paratrooper');
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionThree = prompt('Was I ever in the Military?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('You are correct. I was in th US Army');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionFour = prompt('Do I live in the desert?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct. I live in Las veags, NV');
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('You are wrong!');
} else{
  alert('Answer yes or no');
}

let questionFive = prompt('What is my age? YES ... NO .. ').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes' || questionFive === 'n' || questionFive === 'no'){
  alert('You are wrong!');
} else if(questionFive === '32'){
  alert("By, Gum. You've done it.");
} else{
  alert('Answer yes or no');
}
