var humanscore = 0;
var computerscore = 0;

function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors");
    let BigChoice = choice.toUpperCase();

    while (!(BigChoice === "SCISSORS" || BigChoice === "PAPER" || BigChoice === "ROCK")) {
        choice = prompt("Invalid choice! Choose rock, paper, or scissors:");
        BigChoice = choice.toUpperCase(); 
    }
    return choice;
}

function getComputerChoice() {
    let number = Math.random();
    if (number <= 0.33) {
        return "paper";
    } else if (number > 0.33 && number <= 0.66) {
        return "rock";
    } else {
        return "scissors";
    }
}

function playRound(humanchoice, computerchoice) {
    if (humanchoice.toUpperCase() === computerchoice.toUpperCase()) {
        return "Oh, It looks like a draw! You both picked " + computerchoice + "!";
    } else if (
        (humanchoice.toUpperCase() === "ROCK" && computerchoice === "scissors") ||
        (humanchoice.toUpperCase() === "PAPER" && computerchoice === "rock") ||
        (humanchoice.toUpperCase() === "SCISSORS" && computerchoice === "paper")
    ) {
        humanscore += 1;
        return "You win! " + humanchoice.toLowerCase() + " beats " + computerchoice + "!";
    } else {
        computerscore += 1;
        return "Oh well, you lost! " + computerchoice + " beats " + humanchoice.toLowerCase() + "!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Score: Human - " + humanscore + " | Computer - " + computerscore);
    }

    if (humanscore > computerscore) {
        console.log("YOU WON THE GAME! Final Score: Human " + humanscore + " - Computer " + computerscore);
    } else if (computerscore > humanscore) {
        console.log("YOU LOST THE GAME! Final Score: Human " + humanscore + " - Computer " + computerscore);
    } else {
        console.log("IT'S A DRAW! Final Score: Human " + humanscore + " - Computer " + computerscore);
    }
}

playGame();
