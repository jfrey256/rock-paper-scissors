const choices = ["Rock","Paper","Scissors"];
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const result = document.querySelector("#result");
const title = document.querySelector("#title");
let playerChoice;
let computerChoice;

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    getComputerChoice();
    playerText.textContent = `You chose ${playerChoice}`;
    computerText.textContent = `Computer chose ${computerChoice}`;
    result.textContent = checkWinner();
}));

function getComputerChoice() {
    computerChoice = choices[Math.floor(choices.length * Math.random())];
}

function checkWinner() {
    if (computerChoice == playerChoice) {
        return "Tie"
    } else if (computerChoice == "Rock" && playerChoice == "Scissors" ||
               computerChoice == "Paper" && playerChoice == "Rock" ||
               computerChoice == "Scissors" && playerChoice == "Paper"
    ) {
        return `Computer wins...    ${computerChoice} beats ${playerChoice}`;
    } else {
        return `You win!   ${playerChoice} beats ${computerChoice}`;
    }
} 