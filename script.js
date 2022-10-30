const GAME_CHOICES = ["rock", "paper", "scissors"];

function generateComputerChoice() {
    let randIndex = Math.floor(Math.random() * 3);
    let choice = GAME_CHOICES[randIndex];
    return choice;
}

function getUserChoice() {
    let validChoice = false;
    let input = "";

    while (!validChoice) {
        input = prompt("Enter your move:", "");
        input = input.toLowerCase();

        if (input === GAME_CHOICES[0] || input === GAME_CHOICES[1] || input === GAME_CHOICES[2]) {
            validChoice = true;
        } else {
            alert("Invalid choice! Try again!");
        }
    }

    return input;
}

function playRound(userChoice, computerChoice) {
    let result = "";

    if (userChoice === GAME_CHOICES[0] && computerChoice === GAME_CHOICES[1]) {
        result = "You lose! Paper beats Rock";
    } else if (userChoice === GAME_CHOICES[0] && computerChoice === GAME_CHOICES[2]) {
        result = "You win! Rock beats Scissors";
    } else if (userChoice === GAME_CHOICES[1] && computerChoice === GAME_CHOICES[0]) {
        result = "You win! Paper beats Rock";
    } else if (userChoice === GAME_CHOICES[1] && computerChoice === GAME_CHOICES[2]) {
        result = "You lose! Scissors beats Paper";
    }  else if (userChoice === GAME_CHOICES[2] && computerChoice === GAME_CHOICES[0]) {
        result = "You lose! Rock beats Scissors";
    }  else if (userChoice === GAME_CHOICES[2] && computerChoice === GAME_CHOICES[1]) {
        result = "You win! Scissors beats Paper";
    } else {
        result = "It is a draw! Both chose " + userChoice;
    }

    return result;
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let currentResult = "";
    
    for (let i = 0; i < 5; i++) {
        currentResult = playRound(getUserChoice(), generateComputerChoice());
        console.log(currentResult);

        if (currentResult.includes("win")) {
            userScore++;
        } else if (currentResult.includes("lose")) {
            computerScore++;
        }
    }

    console.log(`Your score: ${userScore}\nComputer's score: ${computerScore}`);
    if (userScore > computerScore) {
        console.log("You have won!");
    } else if (userScore < computerScore) {
        console.log("The computer has won! Better luck next time....");
    } else {
        console.log("It is a draw!");
    }

    return;
}