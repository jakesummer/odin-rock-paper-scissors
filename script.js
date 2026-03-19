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

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let humanChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    })
});