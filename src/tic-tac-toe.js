class TicTacToe {
  player;
  field;
  win;
  constructor() {
    this.player = "x";
    this.field = [[,,,],[,,,],[,,,]];
    this.win= null;
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.field[rowIndex][columnIndex]) {
      this.field[rowIndex][columnIndex] = this.player;
      this.player = this.player == "x" ? "o" : "x";
      if (
        this.field[0][0] === this.field[0][1] &&
        this.field[0][1] === this.field[0][2]
      )
        this.win = this.field[0][0];
      if (
        this.field[1][0] === this.field[1][1] &&
        this.field[1][1] === this.field[1][2]
      )
        this.win = this.field[1][0];
      if (
        this.field[2][0] === this.field[2][1] &&
        this.field[2][1] === this.field[2][2]
      )
        this.win = this.field[2][0];
      if (
        this.field[0][0] === this.field[1][0] &&
        this.field[1][0] === this.field[2][0]
      )
        this.win = this.field[0][0];
      if (
        this.field[0][1] === this.field[1][1] &&
        this.field[1][1] === this.field[2][1]
      )
        this.win = this.field[0][1];
      if (
        this.field[0][2] === this.field[1][2] &&
        this.field[1][2] === this.field[2][2]
      )
        this.win = this.field[0][2];
      if (
        this.field[0][0] === this.field[1][1] &&
        this.field[1][1] === this.field[2][2]
      )
        this.win = this.field[0][0];
      if (
        this.field[2][0] === this.field[1][1] &&
        this.field[1][1] === this.field[0][2]
      )
        this.win = this.field[2][0];
    }
  }

  isFinished() {
    
    return !!this.getWinner()||this.noMoreTurns()
  }

  getWinner() {
    return this.win?this.win:null;
  }

  noMoreTurns() {
      return ![].concat(...this.field).includes(undefined)
      }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex] || null;
  }
}


module.exports = TicTacToe;
