function TicTacToeGame(name1, name2) {
  this.players = [new Player("X", name1), new Player("O", name2)]
  this.gameBoard = new GameBoard()
  this.currentTurn = 1
  this.currentPlayerSymbol = this.players[0].team
}

TicTacToeGame.prototype.takeTurn = function(square) {
  this.gameBoard.Mark(square, this.currentPlayerSymbol)
  // const isWinner = this.checkForWin(this.currentPlayerSymbol, this.gameBoard)
  // if (isWinner) return this.gameOver(this.currentPlayerSymbol, true)
  // if (this.currentTurn >= 9) return this.gameOver(this.currentPlayerSymbol, false)
  this.currentTurn += 1
  if (this.currentPlayerSymbol === this.players[0].team) {
    this.currentPlayerSymbol = this.players[1].team
  } else {
    this.currentPlayerSymbol = this.players[0].team
  }
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
  return isWin
}

TicTacToeGame.prototype.gameOver = function(player, isWinner) {
  console.log("WINNER WINNER or TIE")
  return player
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

// after turn 7 it says winner with this gameBoard state:
// 0: "X"
// 1: "O"
// 2: "X"
// 3: "O"
// 4: "X"
// 5: "O"
// 6: "X"
// 7: ""
// 8: ""


// UI Logic
let myGame

function updateUi(playerSymbol, boxId) {
  // if the box has never been clicked on, disabled === undefined. which means allow it to be clicked on
  $(".player-team").text(playerSymbol) // currentTurn player
  // changeTurn already happened, so playerSymbol is wrong at this point
  if (playerSymbol === "X") {
    playerSymbol = "O"
  } else {
    playerSymbol = "X"
  }
  $(`#${boxId}`).text(playerSymbol).attr("disabled", true) // last turn player
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
    // console.log(myGame)
  })

  $(".board-container").on("click", ".col", function() {
    if ($(this).attr("disabled") === undefined) {
      myGame.takeTurn(this.id)
      console.log(myGame)
      updateUi(myGame.currentPlayerSymbol, this.id)
    }
  })

})
