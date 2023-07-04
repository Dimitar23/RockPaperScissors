const computerChoice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex];
}

let playerParagraph = document.querySelector('#player');
let computerParagraph = document.querySelector('#computer');

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        // it's a tie
        console.log('tie');
    }

    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerWins++;
        console.log('playerwin');
    }

    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        computerWins++;
        console.log('computerwin');
    }

    playerParagraph.textContent = `Player wins: ${playerWins}`;
    computerParagraph = `Computer wins: ${computerWins}`;
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");


//buttonRock.addEventListener('click', playRound('rock', getComputerChoice()));
buttonPaper.addEventListener('click', playRound('paper', getComputerChoice()));
buttonScissors.addEventListener('click', playRound('scissors', getComputerChoice()));