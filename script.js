"use strict";

const items = ['rock', 'paper', 'scissors']

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex =  Math.floor(Math.random() * 3);

    return items[randomIndex];
}

function getHumanChoice() {
    const humanChoice = prompt('Enter "Rock", "Paper" or "Scissors"').toLowerCase()

    if (items.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert('Opps, please enter valid text')
    }
}

function playRound(humanChoice, computerChoice) {

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(
           `Human won, ${humanChoice} beats ${computerChoice}. 
            Human score: ${humanScore}. 
            Computer score ${computerScore}.`
        )
    } else if (humanChoice === computerChoice) {
        console.log(
           `Draw. 
            Human score: ${humanScore}. 
            Computer score ${computerScore}.`
        )
    } else{
        computerScore++;
        console.log(
            `Computer won, ${computerChoice} beats ${humanChoice}. 
             Human score: ${humanScore}. 
             Computer score ${computerScore}.`
         )
    }

}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)