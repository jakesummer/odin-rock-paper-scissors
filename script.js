let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return (
        (choice === 0) ? "rock":
        (choice === 1) ? "paper":
        "scissors"
    );
}

function getHumanChoice() {
    return prompt("What do you choose?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "rock"){
            console.log("Tie!");
        } else if (computerChoice === "paper"){
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else {
            console.log("You win! rock beats scissors!");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock"){
            console.log("You Win! Paper beats rock!");
            humanScore++;
        } else if (computerChoice === "paper"){
            console.log("Tie!");
        } else {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock"){
            console.log("You lose! Rocks beats scissors!");
            computerScore++;
        } else if (computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else {
            console.log("Tie!");
        }
    }
}