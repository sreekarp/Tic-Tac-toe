function turn() {
    return `${currentPlayer}'s Turn`
}

function win() {
    return `${currentPlayer} Wins !`
}

function draw() {
    return `The Game ended in a draw !`
}

function printStatus() {
    const status = document.querySelector('#status')
    status.innerHTML = turn()
}