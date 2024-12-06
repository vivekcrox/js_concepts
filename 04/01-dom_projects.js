// Project 1 : Color changer
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
});


// Project 2 : BMI calculator
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`
    }
});


// Project 3 : Digital Clock
const clock = document.getElementById('clock');

setInterval(()=>{
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


// Project 4 : Guess Game

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();

        const guess = parseInt(userInput.value);
        
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number more than 0');
    }
    else if(guess > 100){
        alert('Please enter a number less than 101');
    }
    else{

        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guesses it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOO low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOO high`);
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;

    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}