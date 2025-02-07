/*
En el mundo de los juegos en línea, el tres en raya se destaca como un juego simple pero divertido para dos jugadores. 
Cada jugador se turna para colocar sus X y O en una pequeña cuadrícula de 3x3. Para ganar, debe colocar tres de sus símbolos 
en una fila, ya sea horizontal, vertical o diagonal. El jugador que lo haga primero gana el juego. Si se llenan todos los espacios 
y no hay un ganador, es un empate. Para que este juego clásico se pueda jugar en línea, utilizamos matrices como estructura básica. 
Ayudan a realizar un seguimiento del progreso del juego y garantizan una jugabilidad fluida.
*/


//MI SOLUCION
import PromptSync from "prompt-sync";
const prompt = PromptSync();

type Mark = "X" | "O" | "-";
const ROWS = 3;
const COLS = 3;

const winnerLines: number[][][] = [
  // Filas
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],

  // Columnas
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],

  // Diagonales
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

class TicTacToe {
  private board: Mark[][] = [];
  private player: Mark;
  private turns: number;
  constructor() {
    this.board = Array(COLS)
      .fill(0)
      .map(() => Array(ROWS).fill("-"));
    this.player = "X";
    this.turns = 0;
  }

  printBoard() {
    console.log("   0   1   2");
    this.board.forEach((row, i) => {
      console.log(i, row.map(symbol => ` ${symbol} `).join("|"));
    });
  }
  

  choosePosition(col: number, row: number, symbol: Mark): boolean {
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) {
      console.log("🚨 Error: La posición está fuera del tablero.");
      return false;
    }

    if (this.board[row][col] !== "-") {
      console.log("❌ Error: Esta posición ya está ocupada. Intenta otra.");
      return false;
    }

    this.board[row][col] = this.player;
    return true;
  }

  playGame() {
    while (true) {
      this.printBoard();
      let col: number;
      let row: number;

      if (this.isDraw()) {
        console.log("Se agotaron los turnos, es un empate!");
        break;
      }

      console.log(`Turno: ${this.turns}`);
      this.switchPlayer();
      console.log(`Turno de: ${this.player}`);
      col = parseInt(prompt("Selecciona la columna: ")!);
      row = parseInt(prompt("Selecciona la fila: ")!);

      if (
        isNaN(col) ||
        isNaN(row) ||
        !this.choosePosition(col, row, this.player)
      ) {
        console.log(
          `La posicion debe ser un numero entre 0 y 2, que ademas no este seleccionado ya, por favor vuelva a intentarlo!!`
        );
        this.switchPlayer();
        continue;
      }
      this.printBoard();
      this.turns++;

      if (this.checkWinner()) {
        console.log(`Ganador: ${this.player}
En el turno ${this.turns}`);
        break;
      }

      prompt("Presiona ENTER para ver el siguiente turno...");
      console.clear();
    }
  }

  checkWinner(): boolean {
    for (const line of winnerLines) {
      const [[r1, c1], [r2, c2], [r3, c3]] = line;
      if (
        this.board[r1][c1] !== "-" &&
        this.board[r1][c1] === this.board[r2][c2] &&
        this.board[r1][c1] === this.board[r3][c3]
      ) {
        return true;
      }
    }

    return false;
  }

  switchPlayer(): void {
    this.player = this.player === "X" ? "O" : "X";
  }

  isDraw(): boolean {
    return this.turns >= 9;
  }
}

const game = new TicTacToe();

game.playGame();

//SOLUCION NOTION
/* class TicTacToe {
    board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']]
    currentPlayer: string = 'X'

    play(row: number, col: number): boolean {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer
            if (this.checkWin(this.currentPlayer)) {
                console.log(`Player ${this.currentPlayer} wins!`)
                return true
            } else if (this.isTie()) {
                console.log("It's a tie!")
                return true
            } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
                return false
            }
        } else {
            console.log("Invalid move, try again.")
            return false
        }
    }

    checkWin(player: string): boolean {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player) {
                return true
            }
        }
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player) {
                return true
            }
        }
        // Check diagonals
        if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
            return true
        }
        if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
            return true
        }

        return false
    }

    isTie(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === '') {
                    return false
                }
            }
        }
        return true
    }

    printBoard(): void {
        for (let i = 0; i < 3; i++) {
            console.log(this.board[i])
        }
        console.log()
    }
}

let game = new TicTacToe()
game.printBoard()
game.play(0, 0)
game.printBoard()
game.play(0, 1)
game.printBoard()
game.play(1, 0)
game.printBoard()
game.play(1, 1)
game.printBoard()
game.play(2, 0)
game.printBoard() */