const GAME_CHOICES = ["rock", "paper", "scissors"];

function generateComputerChoice() {
    let randIndex = Math.floor(Math.random() * 3);
    let choice = GAME_CHOICES[randIndex];
    return choice;
}

function getUserChoice() {
    let isValidChoice = false;
    let input = "";

    while (!isValidChoice) {
        input = prompt("Enter your move:", "");
        input = input.toLowerCase();

        if (input === "rock" || input === "paper" || input === "scissors") {
            isValidChoice = true;
        } else {
            alert("Invalid choice! Try again!");
        }
    }

    return input;
}