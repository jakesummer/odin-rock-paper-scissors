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