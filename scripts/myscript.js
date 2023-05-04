const computerChoice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex];
}

// returns -1 for a player loss, 0 for a draw, 1 for a player win
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            console.log("It\'s a draw! Rock equals Rock.");
            return 0;
        } else if(computerSelection === "paper"){
            console.log("You lose! Paper beats Rock.");
            return -1;
        } else{
            console.log("You win! Rock beats Scissors.");
            return 1;
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You win! Paper beats Rock.");
            return 1;
        } else if(computerSelection === "paper"){
            console.log("It\'s a draw! Paper equals Paper.");
            return 0;
        } else{
            console.log("You Lose! Scissors beat Paper.");
            return -1;
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("You Lose! Rock beats Scissors.");
            return -1;
        } else if(computerSelection === "paper"){
            console.log("You Win! Scissors beat Paper.");
            return 1;
        } else{
            console.log("It\'s a Draw! Scissors equals Scissors.");
            return 0;
        }
    } else {
        console.log("You\'ve entered an invalid value, please restart the game.");
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
            console.log("Game Over! You Won!");
            break;
        }
        else if(computerWinCount === 5){
            console.log("Game Over! The Computer Won!");
            break;
        }
    }
}

game();