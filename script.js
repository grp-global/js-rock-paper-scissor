function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const computerSelection = getComputerChoice();

    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return "Invalid choice. Please enter Rock, Paper, or Scissors.";
    }

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

function getUserChoice() {
    const userInput = prompt("Enter your choice: Rock, Paper, or Scissors");
    
    if (userInput === null || userInput.trim() === "") {
        console.log("Invalid input. Skipping this round.");
        return null;
    }

    return userInput;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = getUserChoice();

        if (playerSelection === null) {
            continue;
        }

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

function resetGame() {
        // Reset scores
        playerScore = 0;
        computerScore = 0;
    
        // Clear result messages
        document.getElementById('result-message').textContent = "Results will appear here";
    
        // Update score display
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
    
    // Code to reset the game state goes here
    console.log("Game reset!");
}

game();
