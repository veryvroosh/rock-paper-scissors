function getComputerChoice(){
    let compChoiceNumber =  Math.floor(Math.random() * (3 - 1 + 1) ) + 1;  //returns 1, 2, or 3
    switch(compChoiceNumber) {
        case 1:
            return "Rock";
            break;

        case 2:
            return "Paper";
            break;

        case 3:
            return "Scissors";
            break;
    }
}


// scores
let humanScore = 0, computerScore = 0;
const round = document.querySelector("#round-result");

function playRound(humanChoice, computerChoice) {

    // check if draw
    if( (humanChoice === computerChoice) ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")) {
        round.textContent = `${humanChoice} (YOU) VS. ${computerChoice} (COMP): Draw!`
    }
    //check if human wins
    else if( (humanChoice === "Rock" && computerChoice === "Scissors") ||
             (humanChoice === "Paper" && computerChoice === "Rock") ||
             (humanChoice === "Scissors" && computerChoice === "Paper") ) {
        round.textContent = `${humanChoice} (YOU) VS. ${computerChoice} (COMP): You win!`
        humanScore++;
    }
    //check if computer wins
    else if( (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ) {
        round.textContent = `${humanChoice} (YOU) VS. ${computerChoice} (COMP): Computer wins!`
        computerScore++;
    }
}


// displays the scores
function updateScores() {
    const humanScoreDiv = document.querySelector("#human-score");
    const computerScoreDiv = document.querySelector("#computer-score");
    humanScoreDiv.textContent = `YOU: ${humanScore}`;
    computerScoreDiv.textContent = `COMP: ${computerScore}`;
}


// checks if someone hit 5 wins
function checkWin(){
    const winner = document.querySelector("#game-result");

    if(humanScore === 5) {
        winner.textContent = "GG You won!";
        disableButtons();
    } else if (computerScore === 5) {
        winner.textContent = "You lost! Try again next time D:";
        disableButtons();
    }
}


// disables the buttons after a game
function disableButtons () {
    const buttons = document.querySelectorAll(".buttons");
    buttons.forEach(button => {
        button.disabled = true;
    });
}


const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

// eventListeners
rockBtn.addEventListener('click',() => {
    playRound("Rock", getComputerChoice());
    updateScores();
    checkWin();
});

paperBtn.addEventListener('click',() => {
    playRound("Paper", getComputerChoice())
    updateScores();
    checkWin();
});

scissorsBtn.addEventListener('click',() => {
    playRound("Scissors", getComputerChoice())
    updateScores();
    checkWin();
});