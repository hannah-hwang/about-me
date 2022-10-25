
'use strict';

let usersName = prompt('What is your name?');
console.log('users name: ' + usersName);
alert('Welcome to my website ' + usersName + '! Let\'s get things started with a pop quiz! :)');

let answer1 = prompt('Was I born in fall?');
answer1 = answer1.toLowerCase();
console.log('Fall question response: ' + answer1);

if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! I was born in November.');
} else if (answer1 === 'no' || answer1 === 'n') {
    alert('Wrooong! I was born in November.');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer2 = prompt('Do I have any pets?');
answer2 = answer2.toLowerCase();
console.log('Pets question response: ' + answer2);

if (answer2 === 'yes' || answer2 === 'y') {
    alert('Yep! I have 1 cat.');
} else if (answer2 === 'no' || answer2 === 'n') {
    alert('Incorrect! I have 1 cat.');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer3 = prompt('Am I trilingual?');
answer3 = answer3.toLowerCase();
console.log('Trilingual question response: ' + answer3);

if (answer3 === 'yes' || answer3 === 'y') {
    alert('Nope! I am actually bilingual.');
} else if (answer3 === 'no' || answer3 === 'n') {
    alert('Correct! I am actually bilingual.');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer4 = prompt('Do I enjoy playing cozy games?');
answer4 = answer4.toLowerCase();
console.log('Cozy games response: ' + answer4);

if (answer4 === 'yes' || answer4 === 'y') {
    alert('Yes! I love playing cozy games :)');
} else if (answer4 === 'no' || answer4 === 'n') {
    alert('Nooo I love cozy games!');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer5 = prompt('Do I collect jigsaw puzzles?');
answer5 = answer5.toLowerCase();
console.log('Jigsaw puzzle response: ' + answer5);

if (answer5 === 'no' || answer5 === 'n') {
    alert('You\'re right! I do like doing puzzles though!');
} else if (answer5 === 'yes' || answer5 === 'y') {
    alert('Good guess! I do enjoy doing puzzles though.');
} else {
    ('Please answer with "yes/y" or "no/n".')
};

alert('Good job ' + usersName + '! Thanks for playing!');