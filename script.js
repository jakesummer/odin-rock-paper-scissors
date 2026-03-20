let winnerText = document.querySelector("h2");
let choiceDisplay = document.querySelector("h3");

let humanScoreText = document.querySelector("#human-score");
let computerScoreText = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

let isGameOver = false;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return (
        (choice === 0) ? "rock":
        (choice === 1) ? "paper":
        "scissors"
    );
}

function playRound(humanChoice, computerChoice) {
    let winner;

    if (isGameOver) {
        humanScore = 0;
        computerScore = 0;
        humanScoreText.textContent = 0;
        computerScoreText.textContent = 0;
        isGameOver = false;
    }

    if (humanChoice === computerChoice) {
        winner = "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        winner = "computer";
    } else {
        winner = "human"
    }

    manageWinner(winner, humanChoice, computerChoice);
}

function manageWinner(winner, humanChoice, computerChoice) {
    if (winner === "tie") {
        winnerText.textContent = "It's a Tie!";
        choiceDisplay.textContent = `${humanChoice.toUpperCase()} ties with ${computerChoice.toUpperCase()}!`
    } else if (winner === "computer") {
        winnerText.textContent = "Computer Won!"
        choiceDisplay.textContent = `${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`
        computerScoreText.textContent = ++computerScore;
    } else {
        winnerText.textContent = "You Won!";
        choiceDisplay.textContent = `${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
        humanScoreText.textContent = ++humanScore;
    }

    if (computerScore === 5) {
        winnerText.textContent = "You Lost!"
        choiceDisplay.textContent = "Make another choice to play again"
        isGameOver = true;
    } else if (humanScore === 5) {
        winnerText.textContent = "You Win!"
        choiceDisplay.textContent = "Make another choice to play again"
        isGameOver = true;
    }
}

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let humanChoice = e.target.parentElement.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});