function computerPlay() {
    let random = Math.random()

    if(random <= 0.333) {
        return 'rock'
    } else if (random > 0.333 && random <= 0.666) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;

    if (player === computer) {
        return 'draw'
    } else if (player === 'rock' && computer === 'scissors' 
    || player === 'paper' && computer === 'rock' 
    || player === 'scissors' && computer === 'paper') {
        return 'player'
    } else {
        return 'computer'
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = window.prompt().toLowerCase()
        let computerSelection = computerPlay()
        let round = playRound(playerSelection, computerSelection)
        if( round === 'player'){
            playerScore += 1;
        } else if(round === 'computer') {
            computerScore += 1;
        }
    }

    console.log(`Player score:  ${playerScore}`, `Computer score: ${computerScore}`)
    if(playerScore > computerScore) {
        console.log('you won')
    } else if(computerScore > playerScore) {
        console.log('you lost')
    } else {
        console.log('draw')
    }
}

game()