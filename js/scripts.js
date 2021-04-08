function TicTacToeGame(name1, name2) {
  this.players = [new Player("X", name1), new Player("O", name2)]
  this.gameBoard = new GameBoard()
  this.currentTurn = 1
  this.currentPlayer = this.players[0].team
}

TicTacToeGame.prototype.takeTurn = function(square, player) {
  // mark the board
  this.gameBoard.Mark(square, player)
  // check for a win
  const isWinner = this.checkForWin(player, this.gameBoard)
  if (isWinner) this.gameOver(player, true)
  // increment the turn counter
  this.currentTurn += 1
  if (this.currentTurn >= 9) this.gameOver(player, false)
  // change whose turn it is
  if (this.currentPlayer === this.players[0].team) {
    this.currentPlayer = this.players[1].team
  } else {
    this.currentPlayer = this.players[0].team
  }
}

TicTacToeGame.prototype.checkForWin = function(player, gameBoard) {
  let isWin = false
  if (gameBoard[0] === player.team && gameBoard[1] === player.team && gameBoard[2] === player.team) isWin = true
  if (gameBoard[3] === player.team && gameBoard[4] === player.team && gameBoard[5] === player.team) isWin = true
  if (gameBoard[6] === player.team && gameBoard[7] === player.team && gameBoard[8] === player.team) isWin = true
  if (gameBoard[0] === player.team && gameBoard[3] === player.team && gameBoard[6] === player.team) isWin = true
  if (gameBoard[1] === player.team && gameBoard[4] === player.team && gameBoard[7] === player.team) isWin = true
  if (gameBoard[2] === player.team && gameBoard[5] === player.team && gameBoard[8] === player.team) isWin = true
  if (gameBoard[0] === player.team && gameBoard[4] === player.team && gameBoard[8] === player.team) isWin = true
  if (gameBoard[2] === player.team && gameBoard[4] === player.team && gameBoard[6] === player.team) isWin = true
  return isWin
}

TicTacToeGame.prototype.gameOver = function(player, isWinner) {
  return player
}

function Player(team, name) {
  this.team = team
  this.name = name
}

function GameBoard() {
  this.squares = new Array(9).fill("")
}

GameBoard.prototype.Mark = function(square, player) {
  const index = Number(square) - 1
  if (this.squares[index] === "") {
    this.squares[index] = player
  }
}



