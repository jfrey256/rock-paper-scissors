const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    let randomSelect = choices[Math.floor(choices.length * Math.random())];
    return randomSelect;
}


function checkWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } 
    else if(
         (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") ||
         (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player";
    } else {
        return "Computer";
    }               
}

function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result == "Computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validate = false;
    while (validate == false) {
        const choice = prompt('Enter Rock, Paper, or Scissors.');
        if (choice == null) {
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (choices.includes(choiceLower)) {
            validate = true;
            return choiceLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        if (checkWinner(playerSelection,computerSelection) == "Player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log("Game over.");
    if (playerScore > computerScore) {
        console.log("You Are The Champion!");
        alert("VICTORY!!!! Thanks for playing!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer is The Champion!");
        alert("LOSER.");
    }
    else {
        console.log("Tie game!");
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${playerScore}`);
}   

game();