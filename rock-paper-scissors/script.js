<<<<<<< HEAD
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) 
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    } else if (randomNumber === 2){
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You win!"
    }
    resultDisplay.innerHTML = result
=======
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) 
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    } else if (randomNumber === 2){
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "Computer wins!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You win!"
    }
    resultDisplay.innerHTML = result
>>>>>>> a427b04534a63a2fd1fb32dbc5c3583b40bf8ba0
}