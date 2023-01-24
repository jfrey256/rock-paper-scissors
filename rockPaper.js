let choices = ["rock","paper","scissors"];

function getComputerChoice() {
    randomSelect = choices[Math.floor(choices.length * Math.random())];
    return randomSelect;
}


function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose!";
    } else {
        return "You win!";
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt('Enter Rock, Paper, or Scissors to play: ').toLowerCase();


console.log("Player Selects" + " " + playerSelection);
console.log("Computer Selects" + " " + computerSelection);
console.log(playRound(playerSelection,computerSelection));