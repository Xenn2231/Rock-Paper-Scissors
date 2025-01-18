"use strict";

const items = ['Rock', 'Paper', 'Scissors']



function getComputerChoice() {
    const randomIndex =  Math.floor(Math.random() * 3);

    return items[randomIndex];
}

function getHumanChoice() {
    const humanChoice = prompt('Enter "Rock", "Paper" or "Scissors"')

    if (items.includes(humanChoice)) {
        return humanChoice;
    }
}