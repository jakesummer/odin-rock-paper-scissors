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

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
}