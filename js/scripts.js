function TicTacToeGame(name1, name2) {
  this.GameBoard = new GameBoard()
  this.Players = [new Player("X", name1), new Player("O", name2)]
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

// const myGame = new TicTacToeGame("Thomas", "Tom")
// myGame.GameBoard exists

// const myPlayer1 = new Player()
// const myPlayer2 = new Player()
// const Players = [new Player(), new Player()]

// Square/Location:
// "1" "2" "3"
// "4" "5" "6"
// "7" "8" "9"

// const nineSizedArray = new Array(9)
// const nineSizedArray2 = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]


// squares = ["x",undefined,"o",undefined...]
// squares = ["","","","","","","","",""]


// parseint("5") => 5
// parseInt("5F") => 5
// parseInt("543djfdjdfjsdfjdsfgj") => 543

// Number("5") => 5
// Number("123abc") = undefined
