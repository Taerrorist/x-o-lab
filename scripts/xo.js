/*-------------------------------- Constants --------------------------------*/
const squareElm = document.querySelectorAll('.sqr')
const messageElm = document.querySelector('#message')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8]
]

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = "X"
let winner = false
let tie = false
/*------------------------ Cached Element References ------------------------*/
const resetBtnElm = document.getElementById('reset')

/*-------------------------------- Functions --------------------------------*/
function init() {
    render()
}

function render() {
    if (winner === false && tie === false) {
        messageElm.textContent = "Player " + turn + "\s" + " turn"
    }
    updateBoard()
    updateMessage()
}

function updateBoard() {
    for (i = 0; i < board.length; i++) {
        squareElm[i].textContent = board[i]
    }
}

function updateMessage() {
    if (winner === false && tie === true) {
        messageElm.textContent = 'it\s a tie!'
    }
    else if (winner === false && tie === false) {
        messageElm.textContent = `${turn}'s turn`
    }
    else if (winner) {
        messageElm.textContent = `${winner} has won`
    }
}



/* 
1. We should not be able to press twice on a square that is filled in (if statements)

2. after each turn check if someone has won
*/

function handleClick(event) {
    const squareIndex = event.target.id

    if (board[squareIndex] !== ''  ) return
    board[squareIndex] = turn

    updateBoard()
    checkForWinner()

    if (turn === "O") {
        turn = "X"
    } else if (turn === "X") {
        turn = "O"
    }
    placePiece()
    updateMessage()
}

//this loop is for ... i forgor 
for (i = 0; i < squareElm.length; i++) {
    squareElm[i].addEventListener('click', handleClick)
}


function placePiece(index) {
    board[index] = turn
}



// loop through the winningCombos
// 2. check that the value in the inner array in our board are the same
function checkForWinner() {
    winningCombos.forEach(combo => {
        const [a, b, c] = combo
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            winner = turn
            messageElm.textContent = "Player " + turn + " wins"
        }
    });
}



function checkForTie() {
    if (winner) {
        tie = false 
        return 
    }
    if (board.every((cell) => cell !== "")) {
        tie = true
    } else {
        tie = false
    } 
}

function switchPlayerTurn() {
    turn = (turn === "X") ? "O" : "X";
    messageElm.textContent = "Player " + turn
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X';
    winner = false
    tie = false
    updateBoard()
    updateMessage()
}


/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init)
resetBtnElm.addEventListener('click', resetGame);
