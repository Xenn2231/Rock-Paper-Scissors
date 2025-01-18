"use strict";

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const reload = document.getElementById('reload');

const maxRounds = 5;
let humanScore = 0;
let computerScore = 0;

const items = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const randomIndex =  Math.floor(Math.random() * 3);
    return items[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result.innerText = 
           `Human won, ${humanChoice} beats ${computerChoice}. 
            Human score: ${humanScore}. 
            Computer score ${computerScore}.`
    } else if (humanChoice === computerChoice) {
        result.innerText = 
           `Draw. 
            Human score: ${humanScore}. 
            Computer score ${computerScore}.`
    } else{
        computerScore++;
        result.innerText = 
            `Computer won, ${computerChoice} beats ${humanChoice}. 
             Human score: ${humanScore}. 
             Computer score ${computerScore}.`
    }
}

function checkGameOver() {
    if (humanScore === maxRounds) {
        result.innerText = `Human won. Score: Human-${humanScore}, Computer-${computerScore}`
        disableButtons()
    } else if (computerScore === maxRounds) {
        result.innerText = `Computer won. Score: Human-${humanScore}, Computer-${computerScore}.`
        disableButtons()
    } else if (humanScore === computerScore && computerScore >= 5 || humanScore >= 5) {
        result.innerText = `It is a tie. Score: Human-${humanScore}, Computer-${computerScore}.`
        disableButtons()
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    reload.style.display = 'inline-block';
}

function reloadGame() {
    result.innerText = ' ';
    reload.style.display = 'none';
    humanScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    playRound('rock', computerSelection)
    checkGameOver()
})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    playRound('paper', computerSelection)
    checkGameOver()
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    playRound('scissors', computerSelection)
    checkGameOver()
})

reload.addEventListener('click', reloadGame)