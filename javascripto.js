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

function getHumanChoice() {
    let uncutHumanChoice = prompt("Rock? Paper? Or scissors?")
    let firstLetter = uncutHumanChoice.substring(0,1).toUpperCase();
    let restOfTheWord = uncutHumanChoice.substring(1, uncutHumanChoice.length).toLowerCase()

    let humanChoice = firstLetter.concat(restOfTheWord);

    return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if( (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")) {
        console.log(`${humanChoice} (YOU) VS. ${computerChoice} (COMP): Draw!`)
    }
    else if( (humanChoice === "Rock" && computerChoice === "Scissors") ||
             (humanChoice === "Paper" && computerChoice === "Rock") ||
             (humanChoice === "Scissors" && computerChoice === "Paper") ) {
        console.log(`${humanChoice} (YOU) VS. ${computerChoice} (COMP): You win!`);
        humanScore++;
    }
    else if( (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ) {
        console.log(`${humanChoice} (YOU) VS. ${computerChoice} (COMP): Computer wins!`);
        computerScore++;
    }
}

function playGame() {
    for(let i = 1; i<=5; i++) {
        console.log("============================")
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i}\nYOU: ${humanScore}\nCOMPUTER: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        console.log("GG You won!");
    } else{
        console.log("You lost! Try again next time D:")
    }
}

playGame();
