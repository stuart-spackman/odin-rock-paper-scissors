let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', playRound));
buttons.forEach(button => button.addEventListener('click', checkScore));

function getComputerChoice() {
    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound() {
    const playerSelection = this.innerText;
    const computerSelection = getComputerChoice();
    const results = document.querySelector('.results');
    const p = document.createElement('p');
    p.style.fontWeight = 'bold';
    p.style.textAlign = 'center';

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${computerSelection} beats ${playerSelection.toLowerCase()}. You lose! `;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${computerSelection} beats ${playerSelection.toLowerCase()}. You lose! `;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${computerSelection} beats ${playerSelection.toLowerCase()}. You lose! `;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${playerSelection} beats ${computerSelection.toLowerCase()}. You win!`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${playerSelection} beats ${computerSelection.toLowerCase()}. You win! `
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. ${playerSelection} beats ${computerSelection.toLowerCase()}. You win! `
    } else {
        p.innerText = `Computer chose ${computerSelection.toLowerCase()}. This round ends in a draw.`
    }
    results.appendChild(p);
}

function checkScore() {
    const results = document.querySelector('.results');
    const lastChild = results.lastChild.innerText;
    if (lastChild.includes('win')) {
        playerScore++;
    } else if (lastChild.includes('lose')) {
        computerScore++;
    }

    const update = document.createElement('p');
    update.style.textAlign = 'center';
    update.innerText = `Player has ${playerScore} points. Computer has ${computerScore} points.`
    results.appendChild(update);

    const final = document.createElement('p');
    final.style.fontSize = '66px';
    if (playerScore === 3) {
        final.innerText = "Player wins!";
        results.appendChild(final);
        buttons.forEach(button => button.replaceWith(
            button.cloneNode(true)
        ));
    } else if (computerScore === 3) {
        final.innerText = "Computer wins!";
        results.appendChild(final);
        buttons.forEach(button => button.replaceWith(
            button.cloneNode(true)
        ));
    }
}