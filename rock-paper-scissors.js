function getComputerChoice() {
    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const editedSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (editedSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lose! ${computerSelection} beats ${editedSelection.toLowerCase()}.`;
    } else if (editedSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lose! ${computerSelection} beats ${editedSelection.toLowerCase()}.`;
    } else if (editedSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! ${computerSelection} beats ${editedSelection.toLowerCase()}.`;
    } else if (editedSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You win! ${editedSelection} beats ${computerSelection.toLowerCase()}.`
    } else if (editedSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${editedSelection} beats ${computerSelection.toLowerCase()}.`
    } else if (editedSelection === 'Paper' && computerSelection === 'Rock') {
        return `You win! ${editedSelection} beats ${computerSelection.toLowerCase()}.`
    } else {
        return `Both parties chose ${editedSelection.toLowerCase()}. This round ends in a draw.`
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}. Make your choice.`);
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\nYou win!`)
    } else if (computerScore > playerScore) {
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\nYou lose!`)
    } else {
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\nWe have a draw!`)
    }
}

game();