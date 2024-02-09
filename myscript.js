
const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");
const displayPlayerScore = document.getElementById("displayPlayerScore");
const displayComputerScore = document.getElementById("displayComputerScore");
let playerScore = 0;
let computerScore = 0;


const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    gameWinner();
});

const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    gameWinner();
});
    
const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () => {
    playerSelection  = "scissors";
    playRound();
    gameWinner();
});



function playRound(){

    const computerSelection = choices[Math.floor(Math.random() * 3)];
    let result = " ";

    if (playerSelection === computerSelection) {
            result = "It's a tie! Play again!"; 
        }
        else if (playerSelection==="rock" && computerSelection==="scissors") {
            playerScore++;
            result = "You win! Rock beats Scissors";
            displayPlayerScore.textContent = playerScore;
        }
        else if (playerSelection==="rock" && computerSelection==="paper") {
            computerScore++;
            result =  "You lose! Paper beats Rock";
            displayComputerScore.textContent = computerScore;
        }
        else if (playerSelection==="paper" && computerSelection==="scissors") {
            computerScore++;
            result =  "You lose! Scissors beats Paper";
            displayComputerScore.textContent = computerScore;
        }
        else if (playerSelection==="paper" && computerSelection==="rock") {
            playerScore++;
            result =  "You win! Paper beats Rock";
            displayPlayerScore.textContent = playerScore;
        }
        else if (playerSelection==="scissors" && computerSelection==="rock") {
            computerScore++;
            result =  "You lose! Rock beats Scissors";
            displayPlayerScore.textContent = playerScore;
        }
        else if (playerSelection==="scissors" && computerSelection==="paper") {
            playerScore++;
            result = "You win! Scissors beats Paper";
            displayPlayerScore.textContent = playerScore;
        }
        
        player.textContent = `${playerSelection}`;
        computer.textContent = `${computerSelection}`;
        winner.textContent = result;
}

function gameWinner(){
                    
        if (playerScore === 5 ) {
            const pText = document.createElement('div');
            pText.textContent = "Congratulations! You win!";
            container.appendChild(pText);

            const playAgain = document.createElement('button');
                playAgain.textContent = "Play Again?";
                playAgain.addEventListener('click', () => {
                    window.location.reload();
                });
            container.appendChild(playAgain);
           
           
        }
        else if (computerScore === 5 ){
            const cText = document.createElement('div');
            cText.textContent ="Sorry, you lose!  Computer wins!";
            container.appendChild(cText);

            const playAgain = document.createElement('button');
                playAgain.textContent = "Play Again?";
                playAgain.addEventListener('click', () => {
                    window.location.reload();
                });
            container.appendChild(playAgain);
                   
        }
           
}
