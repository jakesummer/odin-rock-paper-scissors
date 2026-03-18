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
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        return "computer";
    } else {
        return "human";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
            alert(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (winner == "computer") {
            computerScore++;
            alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else {
            alert("Tie!");
        }
    }

    if (humanScore > computerScore) {
        alert(`You won! You had ${humanScore} points and the computer only had ${computerScore} points.`);
    } else if (humanScore < computerScore) {
        alert(`You lost! The computer had ${computerScore} points but you only had ${humanScore} points`);
    } else {
        alert(`Tie! You both had ${humanScore} points.`);
    }
}

playGame()