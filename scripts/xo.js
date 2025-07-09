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
let board =['','','','','','','','','']
let turn = "X"
let winner = false
let tie = false
/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/
function init(){
    render()
    updateBoard()
    updateMessage()
    handleClick()
    
}

function render(){
    if (winner === false && tie === false){
   messageElm.textContent = 'Player\'s turn'
} 

}console.log()

function updateBoard(){
for (i = 0; i < board.length; i++){
    let cell = board[i]
    console.log(cell)
} 

}

function updateMessage(){
 if (winner === false && tie === true){
    messageElm.textContent = 'it\s a tie!'
 }
}
init()

function handleClick(squareIndex){
    
for (i = 0; i < squareElm.length; i++){
    squareElm[i].addEventListener('click',handleClick)
}
    placePiece(squareIndex)
}


function placePiece(index){
    board[index] = turn
    console.log(board)
} 


function checkForWinner(){

}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init)
