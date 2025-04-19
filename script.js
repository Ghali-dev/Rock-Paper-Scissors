var humanscore = 0;
var computerscore = 0;
const humanScoreDisplay = document.getElementById('humanScore');
const computerScoreDisplay = document.getElementById('computerScore');
const gameResult = document.getElementById('gameResult');
const finalResult = document.getElementById('finalResult');



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
        gameResult.innerHTML = `It's a draw! Both chose ${computerchoice}.`;
    } else if (
        (humanchoice.toUpperCase() === 'ROCK' && computerchoice === 'scissors') ||
        (humanchoice.toUpperCase() === 'PAPER' && computerchoice === 'rock') ||
        (humanchoice.toUpperCase() === 'SCISSORS' && computerchoice === 'paper')
    ) {
        humanscore++;
        humanScoreDisplay.textContent = humanscore;
        gameResult.innerHTML = `You win! ${humanchoice} beats ${computerchoice}.`;
    } else {
        computerscore++;
        computerScoreDisplay.textContent = computerscore;
        gameResult.innerHTML = `You lose! ${computerchoice} beats ${humanchoice}.`;
    }

    if ((humanscore === 5) ||( computerscore=== 5)) {
        setTimeout(() => {
            if (humanscore > computerscore) {
                finalResult.innerHTML = `You won the game homie gg. Final score: ${humanscore} - ${computerscore}`;
            } else if (computerscore > humanscore) {
                finalResult.innerHTML = `You lost the game. It is what it is gang... Final score: ${humanscore} - ${computerscore}`;
            } else {
                finalResult.innerHTML = `It's a tie!(somehow) Final score: ${humanscore} - ${computerscore}`;
            }
        }, 500);
    }
}



function getHumanChoice(choice) {
    return choice;
}





// this is the old way to get the human choice I don't need it anymore
/*function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors");
    let BigChoice = choice.toUpperCase();

    while (!(BigChoice === "SCISSORS" || BigChoice === "PAPER" || BigChoice === "ROCK")) {
        choice = prompt("Invalid choice! Choose rock, paper, or scissors:");
        BigChoice = choice.toUpperCase(); 
    }
    return choice;
}*/


document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});