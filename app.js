
'use strict';

let usersName = prompt('What is your name?');
console.log('users name: ' + usersName);
alert('Welcome to my website ' + usersName + '! Let\'s get things started with a pop quiz! :)');

let score = 0;

let answer1 = prompt('Was I born in fall?');
answer1 = answer1.toLowerCase();
console.log('Fall question response: ' + answer1);

if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! I was born in November.');
    score++;
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
    score++;
} else if (answer2 === 'no' || answer2 === 'n') {
    alert('Incorrect! I have 1 cat.');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer3 = prompt('Am I trilingual?');
answer3 = answer3.toLowerCase();
console.log('Trilingual question response: ' + answer3);

if (answer3 === 'no' || answer3 === 'n') {
    alert('Correct! I am actually bilingual.');
    score++;
} else if (answer3 === 'yes' || answer3 === 'y') {
    alert('Nope! I am actually bilingual.');
} else {
    alert('Please answer with "yes/y" or "no/n".');
};

let answer4 = prompt('Do I enjoy playing cozy games?');
answer4 = answer4.toLowerCase();
console.log('Cozy games response: ' + answer4);

if (answer4 === 'yes' || answer4 === 'y') {
    alert('Yes! I love playing cozy games :)');
    score++;
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
    score++;
} else if (answer5 === 'yes' || answer5 === 'y') {
    alert('Good guess! No, but I do enjoy doing puzzles though.');
} else {
    ('Please answer with "yes/y" or "no/n".')
};


for (let i = 0; i < 4; i++) {
    let answer6 = prompt('Guess a number between 1-10.');
    console.log('Number response: ' + answer6);
    if (answer6 === "6") {
        alert('Correct!');
        score++;
        break;
    }
    else if (answer6 < 6) {
        alert('Nope! You guessed too low.');
    }
    else if (answer6 > 6) {
        alert('Nope! You guessed too high.');
    }
    if (i >= 3) {
        alert('Sorry! The number was 6.')
    }
};

let favTea = ['oolong tea', 'black tea', 'barley tea', 'green tea'];
function teaQuestion() {
    for (let i = 0; i < 6; i++) {
        let answer7 = prompt('What is my favorite tea?').toLowerCase();
        console.log('Favorite tea response:' + answer7);
        if (i >= 5) {
            alert('Sorry! You have no more remaining attempts.');
            break;
        }
        for (let j = 0; j < favTea.length; j++) {
            console.log(answer7);
            if (answer7 === favTea[j]) {
                alert('Correct!');
                score++;
                i = 100;
                break;

            }
        }
        if (i < 6) {
            alert('That was incorrect! Guess my favorite tea again.');
        }

    }
}
teaQuestion();

alert('Your final score is ' + score + ' out of 7!');

alert('Good job ' + usersName + '! Thanks for playing!');