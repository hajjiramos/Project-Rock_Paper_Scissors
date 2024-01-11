let computerSelection = ('rock', 'paper', 'scissors', ' ')
let playerScore = 0;
let computerScore = 0;
let playerFinalScore = 0;
let computerFinalScore = 0;
let finalResult;
let playerSelection;




function getComputerChoice() {
    computerSelection=Math.floor(Math.random() * 3);
    switch (computerSelection){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getPlayerChoice() {
    playerSelection=prompt("Enter your choice:   Rock, Paper, Scissors")?.toLowerCase();
    
    if (playerSelection=== "rock") {
        return "rock";
    }
    else if (playerSelection=== "paper") {
        return "paper";
    }
    else if (playerSelection=== "scissors") {
        return "scissors";
    }
    else {
        return "Choose from Rock, Paper or Scissors only!";
    }
}





function playRound(playerSelection,computerSelection) {
      
    if (playerSelection === computerSelection) {
        return "It's a tie! Play again!"; 
        
    }
    else if (playerSelection==="rock" && computerSelection==="scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection==="rock" && computerSelection==="paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection==="paper" && computerSelection==="scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection==="paper" && computerSelection==="rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    }
    else if (playerSelection==="scissors" && computerSelection==="rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection==="scissors" && computerSelection==="paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    }
    else {
        return "Try Again!";
        
                
    }  
}


function game(){
    playerSelection = getPlayerChoice();
    console.log("Player: " + `${playerSelection}`);
    
    computerSelection = getComputerChoice();
    console.log("Computer: " + `${computerSelection}`);
    
    console.log(playRound(playerSelection,computerSelection));

    console.log("Player Score: " + `${playerScore}`);
    console.log("Computer Score: " + `${computerScore}`);

} 
 
game();
game();
game();
game();
game();  

function winner() {
    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    }
    else {
        console.log("Sorry, you lose!  Computer wins!");
    }
    
}

winner();




