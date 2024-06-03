const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//Return a random number between 1 and 3.
function getComputerChoice() { 
    const num = Math.floor(Math.random() * 3 + 1) ;
    return num === 1? "Rock": num === 2? "Paper": "Scissors"
}

//Use prompt to ask the player to choose Rock, Paper or Scissors.
function getHumanChoice() {
    prompt("type Rock, Paper or Scissors to play")
}

function playgame() {
//Play 5 rounds and declare the winner.
    let humanScore = 0;
    let computerScore = 0;

    const playRound = function (humanChoice, computerChoice) {
        //Return the winner of the current game.
        getComputerChoice()
        getHumanChoice()  
    };
    console.log(humanChoice + " " + computerChoice)
}

playgame()