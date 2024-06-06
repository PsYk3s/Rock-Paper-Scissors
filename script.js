const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const resultText = document.getElementById("results");
const buttons = document.getElementById("buttons")
const scores = document.getElementById("scores")

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));

let humanScore = 0;
let computerScore = 0;

function checkEnd() {
    humanScore == 5 ? buttons.innerText = "You won!" :
    computerScore == 5 ? buttons.innerText = "You lost!" :
    0;
}

//Return a random number between 1 and 3, then assign ro Rock, Paper or Scissors.
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3 + 1);
    return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors"
}

//Play a round to see who the winner is or if a tie
function playRound(humanChoice) {
    resultText.innerText = ""
    const computerChoice = getComputerChoice()

    humanChoice == "Rock" && computerChoice == "Paper" ||
    humanChoice == "Paper" && computerChoice == "Scissors" ||
    humanChoice == "Scissors" && computerChoice == "Rock" ? computerScore++ :
    computerChoice == "Rock" && humanChoice == "Paper" ||
    computerChoice == "Paper" && humanChoice == "Scissors" ||
    computerChoice == "Scissors" && humanChoice == "Rock" ? humanScore++ :
    resultText.innerText = "The round is a tie, "
    resultText.innerText += humanChoice + " versus " + computerChoice + "!"
    scores.innerText = "You: " + humanScore + " - " + "Computer: " + computerScore
    checkEnd()
};