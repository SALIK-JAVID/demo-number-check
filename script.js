'use strict';



// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);
// //using Dom to sellect any element in Html

// // documnet.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 10;

// document.querySelector('.number').textContent = 13;

// console.log(document.querySelector('.guess').value = 19);



//defining the secret number of the game
const number = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = number;


document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);  //this will return the guessed number

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!❌';
        
    //when we dont guess the number in the game
    }

});