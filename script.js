let humanScore = 0;
let computerScore = 0;

//Return a random number between 1 and 3, then assign ro Rock, Paper or Scissors.
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3 + 1);
    return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors"
}

//Use prompt to ask the player to choose Rock, Paper or Scissors.
function getHumanChoice() {
    return prompt("type Rock, Paper or Scissors to play", "Rock, Paper or Scissors?")
}

//Play a round to see who the winner is or if a tie
function playRound(humanChoice, computerChoice) {

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    }
    humanScore < computerScore ? console.log("You lost, " + humanScore + " to " + computerScore) :
    humanScore > computerScore ? console.log("You won!, " + humanScore + " to " + computerScore) :  
    console.log("No winner, press f5 to try again!")

    //Check to see who wins and increment score, otherwise tie up
    humanChoice == "rock" && computerChoice == "Paper" ||
    humanChoice == "paper" && computerChoice == "Scissors" ||
    humanChoice == "scissors" && computerChoice == "Rock" ? computerScore++ :
    computerChoice == "Rock" && humanChoice == "paper" ||
    computerChoice == "Paper" && humanChoice == "scissors" ||
    computerChoice == "Scissors" && humanChoice == "rock" ? humanScore++ :
    console.log("The round is a tie")

    console.log("You picked " + humanChoice + " and the computer picked " + computerChoice + "!")
};

//Starts the game
playRound()