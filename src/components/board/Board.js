import React, { Component } from 'react'
import Cell from '../cell'

const INITIAL_STATE_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const PLAYER_SYMBOLS = ['X', 'O']

class Board extends Component {

  constructor (props) {
    super(props)

    this.state = {
      board: [...INITIAL_STATE_BOARD],
      player: PLAYER_SYMBOLS[0],
      winner: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.winner = this.winner.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleClick (rowIndex, colIndex) {

    const {board, winner} = this.state
    if (board[rowIndex][colIndex] || winner) {
      return
    }
    board[rowIndex][colIndex] = this.state.player

    let isWinner = this.winner(board, 'X')
    isWinner = !isWinner ? this.winner(board, 'O') : isWinner

    this.setState(prevState => ({
          board,
          player: prevState.player === 'X' ? 'O' : 'X',
          winner: isWinner
        }
      )
    )

  }

  reset (e) {
    this.setState({
      board: [['', '', ''],
        ['', '', ''],
        ['', '', '']],
      player: PLAYER_SYMBOLS[0],
      winner: false
    })
  }

  /**
   * checks for a winner
   * @param board
   * @param player
   * @returns player | false if can't find any winner
   */
  winner (board, player) {

    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] === player) {
        return player
      }

      if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] === player) {
        return player
      }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] === player) {
      return player
    }

    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] === player) {
      return player
    }

    return false
  }

  draw (board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (!board[i][j]) {
          return false
        }
      }
    }
    return true
  }

  render () {
    const {board, winner, player} = this.state
    const status = winner ? `player ${winner} won!` : this.draw(board) ? 'A Draw!' : `next player: ${player}`
    return (
      <div className="board">
        <div className="status">{status}</div>
        <button onClick={this.reset}>Reset</button>
        <div className="game">
          {board.map((row, rowIndex) =>
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) =>
                <Cell key={colIndex} rowIndex={rowIndex} colIndex={colIndex} value={board[rowIndex][colIndex]}
                      handleClick={this.handleClick}/>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default Board