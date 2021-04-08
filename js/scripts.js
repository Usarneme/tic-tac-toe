function TicTacToeGame(name1, name2) {
  this.players = [new Player("X", name1), new Player("O", name2)]
  this.gameBoard = new GameBoard()
  this.currentTurn = 1
  this.currentPlayerSymbol = this.players[0].team
}

TicTacToeGame.prototype.checkForWin = function(playerSymbol, gameBoard) {
  let isWin = false
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[1] === playerSymbol && gameBoard.squares[2] === playerSymbol) isWin = true
  if (gameBoard.squares[3] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[5] === playerSymbol) isWin = true
  if (gameBoard.squares[6] === playerSymbol && gameBoard.squares[7] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[3] === playerSymbol && gameBoard.squares[6] === playerSymbol) isWin = true
  if (gameBoard.squares[1] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[7] === playerSymbol) isWin = true
  if (gameBoard.squares[2] === playerSymbol && gameBoard.squares[5] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[2] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[6] === playerSymbol) isWin = true
  console.log('checking for win? ',isWin)
  return isWin
}

TicTacToeGame.prototype.endTurn = function() {
  this.currentTurn += 1
  if (this.currentPlayerSymbol === this.players[0].team) {
    this.currentPlayerSymbol = this.players[1].team
  } else {
    this.currentPlayerSymbol = this.players[0].team
  }
}

function Player(team, name) {
  this.team = team
  this.name = name
}

function GameBoard() {
  this.squares = new Array(9).fill("")
}

GameBoard.prototype.Mark = function(square, playerSymbol) {
  const index = Number(square) - 1
  if (this.squares[index] === "") {
    this.squares[index] = playerSymbol
  }
}

// UI Logic
let myGame

function updateUi(playerSymbol, boxId) {
  $(".player-team").text(playerSymbol)
  $(`#${boxId}`).text(playerSymbol).attr("disabled", true)
}

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault()
    const playerOne = $("#playerOne").val()
    const playerTwo = $("#playerTwo").val()
    myGame = new TicTacToeGame(playerOne,playerTwo)
    $("form").hide()
    $(".board-container").show()
    $(".current-player").show()
  })

  $(".board-container").on("click", ".col", function() {
    if ($(this).attr("disabled") === undefined) {
      // take a turn
      console.log("before turn",myGame.gameBoard.squares)
      // mark the board
      myGame.gameBoard.Mark(this.id, myGame.currentPlayerSymbol)
      // update the displayed board
      updateUi(myGame.currentPlayerSymbol, this.id)
      // look for a win or game over condition
      const isWinner = myGame.checkForWin(myGame.currentPlayerSymbol, myGame.gameBoard)
      console.log("after check for win",myGame.gameBoard.squares)
      if (isWinner) {
        // we have a winner
        console.log("WINNER")
      } else {
        if (myGame.currentTurn >= 9) {
          // then it's a tie
          console.log("TIE")
        }
        // continue the game
        myGame.endTurn()
      }
    }
  })
})
