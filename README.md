# PROJECT NAME
## By Tom & Thomas

---

### Project Description

This project is a web application that DESCRIPTION
---
### Tech Stack
1. HTML5+CSS3
2. JavaScript/ES6+
3. jQuery
4. Bootstrap
---

### Project Build Available At:

[BUILD URL](BUILD URL)

---
### Installation Instructions
1. Clone this repo: `git clone https://github.com/Usarneme/REPO URL`
2. Enter new directory `cd REPO DIR`
3. Begin a web server in order to interact with and view index.html. For example:
  * If you have python, you can use: `python2 -m SimpleHTTPServer 8080` in the project root directory
  * Or you can use [VScode LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  * Or whatever server you know how to run/prefer to use
4. Open your browser and navigate to the webserver location (for example: localhost:8080)
---
### Known Issues:
1. NO KNOWN ISSUES
2. Please open a pull request if you have any issues!
---
### Test Suite/Specification

```
Describe: TicTacToeGame

  Test: TicTacToeGame has a game board object
  Code: const myTicTacToeGame = new TicTacToeGame()
  Expect: myTicTacToeGame.hasOwnProperty(GameBoard)

  Test: TicTacToeGame has a players array
  Code: const myTicTacToeGame = new TicTacToeGame()
  Expect: myTicTacToeGame.Players is an array

  Test: TicTacToeGame players array has a length of 2
  Code: const myTicTacToeGame = new TicTacToeGame()
  Expect: myTicTacToeGame.Player.length === 2

  Test: player1 is on team X
  Code: const myPlayer1 = new Player("X")
  Expect: myPlayer1.team === "X"

  Test: player2 is on team O
  Code: const myPlayer2 = new Player("O")
  Expect: myPlayer2.team === "O"

  Test: A player should have a name 
  Code: const namedPlayer = new Player("X","thomas")
  Expect: namedPlayer.name === "thomas"

  Test: GameBoard should have 9 squares
  Code: const myGameBoard = new GameBoard()
  Expect: myGameBoard.squares.length === 9 

  Test: GameBoard Marks X or O into empty square  
  Code: const myGameBoard = new GameBoard()
  myGameBoard.Mark("1", "X") 
  Expect: myGameBoard.squares[0] === "X"

  Test: GameBoard cant Mark defined index
  Code: const myGameBoard = new GameBoard()
   myGameBoard.Mark("1", "X")
   myGameBoard.Mark("1", "O")
  Expect: myGameBoard.squares[0] === "X"

  Test: 
  Code:
  Expect:

  Test: 
  Code:
  Expect:

  Test: 
  Code:
  Expect:

  Test: 
  Code:
  Expect:

```
---
### License is GPLv3 and I make no claim to copyright.
<br />

> You can't steal what is freely given. Enjoy!

