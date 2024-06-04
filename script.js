let humanScore;
let computerScore;

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
function playRound() {

    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();

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

//Play 5 rounds and return winner/loser/tie
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {

        playRound()
        
        console.log("You: " + humanScore + " - Computer: " + computerScore)
    }
    humanScore < computerScore ? console.log("You lost the game, " + humanScore + " to " + computerScore + ", press f5 to try again!") :
    humanScore > computerScore ? console.log("You won the game!, " + humanScore + " to " + computerScore + ", press f5 to try again!") :
    
    console.log("No winner, press f5 to try again!")

}

//Makes it clearer to see when a new game starts
console.log("=========================New Game===========================")

//Starts the game
playGame()