function TicTacToeGame(name1, name2) {
  this.players = [new Player("X", name1), new Player("O", name2)]
  this.gameBoard = new GameBoard()
  this.currentTurn = 1
  this.currentPlayer = this.players[0].team
}

TicTacToeGame.prototype.takeTurn = function(square) {
  this.gameBoard.Mark(square, this.currentPlayer)
  const isWinner = this.checkForWin(this.currentPlayer, this.gameBoard)
  if (isWinner) return this.gameOver(this.currentPlayer, true)
  this.currentTurn += 1
  if (this.currentTurn >= 9) return this.gameOver(this.currentPlayer, false)
  if (this.currentPlayer === this.players[0].team) {
    this.currentPlayer = this.players[1].team
  } else {
    this.currentPlayer = this.players[0].team
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

// const myTTTG = new TicTacToeGame("Tom","Thomas")
// console.log(myTTTG.gameBoard)
// myTTTG.takeTurn("1", "X")
// myTTTG.takeTurn("4", "O")
// myTTTG.takeTurn("2", "X")
// myTTTG.takeTurn("5", "O")
// myTTTG.takeTurn("3", "X")
// myTTTG.takeTurn("6", "O")
// myTTTG.takeTurn("7", "X")
// console.log(myTTTG)
