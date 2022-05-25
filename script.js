const GAME_CHOICES = ["rock", "paper", "scissors"];

function generateComputerChoice() {
    let randIndex = Math.floor(Math.random() * 3);
    let choice = GAME_CHOICES[randIndex];
    return choice;
}