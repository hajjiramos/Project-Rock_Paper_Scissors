//let computerSelection = ('rock', 'paper', 'scissors');
let getPlayerChoice = ('rock', 'paper', 'scissors');
let playerScore = 0;
let computerScore = 0;
let finalPlayerScore = 0;
let finalComputerScore = 0;



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

const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () => {
    getPlayerChoice = 'rock';
    game();
    
});

const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () => {
    getPlayerChoice = 'paper';
    game();
    
});
    
const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () => {
    getPlayerChoice = 'scissors';
    game();
    
});



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
    const container = document.querySelector('#container');
    container.style.color = 'blue';
    container.style.padding = '20px';


    playerSelection = getPlayerChoice;
    const text = document.createElement('div');
    text.textContent = `Player: ${playerSelection}`;
    container.appendChild(text);


    
    computerSelection = getComputerChoice();
    const comp = document.createElement('div');
    comp.textContent = `Computer: ${computerSelection}`;
    container.appendChild(comp);


    const play = document.createElement('p');
    play.textContent = playRound(playerSelection,computerSelection);
    container.appendChild(play);

    const div = document.createElement('p');
    div.style.color ='black';
    div.style.backgroundColor = 'pink';
    div.style.border = '5px solid red';
    div.style.width = '150px';
    div.style.marginLeft = '350px';
    div.style.marginTop = '-80px';
    div.style.padding = '10px';
        const pScore = document.createElement('div');
        const cScore = document.createElement('div');
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        div.appendChild(pScore);
        div.appendChild(cScore);
    container.appendChild(div); 


    const winner = document.createElement('p');
    winner.style.fontSize = '25px';
    winner.style.color = 'black';

    if (playerScore === 5 ) {
        const pText = document.createElement('div');
        pText.textContent = "Congratulations! You win!";
        winner.appendChild(pText);
        //alert(pText);
    }
    else if (computerScore === 5 ){
        const cText = document.createElement('div');
        cText.textContent ="Sorry, you lose!  Computer wins!";
        winner.appendChild(cText);
        //alert(cText);
       
    }
    container.appendChild(winner);
 
}

