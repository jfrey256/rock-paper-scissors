console.log('Hello');
const choices = ["Rock","Paper","Scissors"];
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const result = document.querySelector("#result");
const title = document.querySelector("#title");
const cpuScore = document.querySelector("#cpuScore");
const playScore = document.querySelector("#playScore");
const final = document.querySelector("#final");
let playerChoice;
let computerChoice;

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    getComputerChoice();
    playerText.textContent = `You chose ${playerChoice}`;
    computerText.textContent = `Computer chose ${computerChoice}`;
    result.textContent = checkWinner();
    keepScore();
    playScore.textContent = `You: ${playerScore}`;
    cpuScore.textContent = `Computer: ${computerScore}`;
}));

function getComputerChoice() {
    computerChoice = choices[Math.floor(choices.length * Math.random())];
}

function checkWinner() {
    let playerScore = 0;
    let computerScore = 0;
    if (computerChoice == playerChoice) {
        return "Tie";
    } else if (computerChoice == "Rock" && playerChoice == "Scissors" ||
               computerChoice == "Paper" && playerChoice == "Rock" ||
               computerChoice == "Scissors" && playerChoice == "Paper"
    ) {
        return `Computer wins...    ${computerChoice} beats ${playerChoice}`;
    } else {
        return `You win!   ${playerChoice} beats ${computerChoice}`;
    }
}

let playerScore = 0;
let computerScore = 0;

function keepScore() {
    if (computerChoice == playerChoice) {
        playerScore;
        computerScore;
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors" ||
               computerChoice == "Paper" && playerChoice == "Rock" ||
               computerChoice == "Scissors" && playerChoice == "Paper"
    ) {
        return computerScore++;
    } else {
        return playerScore++;
    }
}
