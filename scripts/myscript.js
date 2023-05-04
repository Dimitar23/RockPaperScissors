const computerChoice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex];
}

// returns -1 for a player loss, 0 for a draw, 1 for a player win
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            console.log("Round draw! Rock ties Rock.");
            return 0;
        } else if(computerSelection === "paper"){
            console.log("You lose the round! Paper beats Rock.");
            return -1;
        } else{
            console.log("You won the round! Rock beats Scissors.");
            return 1;
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You won the round! Paper beats Rock.");
            return 1;
        } else if(computerSelection === "paper"){
            console.log("Round draw! Paper ties Paper.");
            return 0;
        } else{
            console.log("You lose the round! Scissors beat Paper.");
            return -1;
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("You lose the round! Rock beats Scissors.");
            return -1;
        } else if(computerSelection === "paper"){
            console.log("You won the round! Scissors beat Paper.");
            return 1;
        } else{
            console.log("Round draw! Scissors ties Scissors.");
            return 0;
        }
    } else {
        console.log("You\'ve entered an invalid value, please retry. Valid options are Rock, Paper or Scissors.");
        return 0;
    }
}

function game(){
    let playerSelection;
    let computerSelection;

    let gameResult;
    let playerWinCount = 0;
    let computerWinCount = 0;

    while(true){
        playerSelection = window.prompt("What's your sign?");
        playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();

        gameResult =  playRound(playerSelection, computerSelection);

        if(gameResult === -1){
            computerWinCount++;
        } else if(gameResult === 1){
            playerWinCount++;
        }
        
        console.log("Player round wins: " + playerWinCount);
        console.log("Computer round wins: " + computerWinCount);

        if(playerWinCount === 5){
            console.log("YOU WIN!");
            break;
        }
        else if(computerWinCount === 5){
            console.log("Game Over! The Computer Won!");
            break;
        }
    }
}

game();