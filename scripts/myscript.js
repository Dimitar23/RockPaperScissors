const computerChoice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex];
}

let playerParagraph = document.querySelector('#player');
let computerParagraph = document.querySelector('#computer');

let outcomeParagraph = document.querySelector('#round-outcome');

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if(playerWins === 5 || computerWins === 5){
        return;
    }
    if(playerSelection === computerSelection){
        // it's a tie
        console.log('tie');
        outcomeParagraph.textContent = 'This round is a tie';
    } else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerWins++;
        console.log('playerwin');
        outcomeParagraph.textContent = 'This round is a player win';
        playerParagraph.textContent = `Player wins: ${playerWins}`;
    } else if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        computerWins++;
        console.log('computerwin');
        outcomeParagraph.textContent = 'This round is a computer win';
        computerParagraph.textContent = `Computer wins: ${computerWins}`;
    }

    if(playerWins === 5){
        outcomeParagraph.textContent = 'Game Over! Player wins the game';
    } else if(computerWins === 5){
        outcomeParagraph.textContent = 'Game Over! Computer wins the game';
    }
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener('click', () => playRound('rock', getComputerChoice()));
buttonPaper.addEventListener('click', () => playRound('paper', getComputerChoice()));
buttonScissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));