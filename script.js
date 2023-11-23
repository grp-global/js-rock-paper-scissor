let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    if (roundsPlayed >= 5) {
        endGame();
        return;
    }

    const computerSelection = getComputerChoice();

    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return;
    }

    const result = determineWinner(playerSelection, computerSelection);

    console.log(result);

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    roundsPlayed++;
    updateDisplay();
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateDisplay() {
    // Update result message
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = `Round ${roundsPlayed}: ${determineWinnerMessage()}`;

    // Update score display
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function determineWinnerMessage() {
    if (playerScore > computerScore) {
        return "You are winning!";
    } else if (playerScore < computerScore) {
        return "Computer is winning!";
    } else {
        return "It's a tie!";
    }
}

function resetGame() {
    // Reset scores and rounds
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // Clear result messages
    document.getElementById('result-message').textContent = "Results will appear here";

    // Update score display
    updateDisplay();

    console.log("Game reset!");
}

function endGame() {
    console.log("Game over!");
    // You can add more logic here if needed
}
