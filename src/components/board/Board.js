import React, { Component } from 'react'
import Cell from '../cell'

const INITIAL_STATE_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const PLAYER_SYMBOLS = ['X','O']

class Board extends Component {

  constructor (props) {
    super(props)

    this.state = {
      board: INITIAL_STATE_BOARD,
      player: PLAYER_SYMBOLS[0],
      winner: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.winner = this.winner.bind(this)
  }

  handleClick (rowIndex, colIndex) {

    const board = this.state.board
    board[rowIndex][colIndex] = this.state.player

    const isWinner = this.winner(board, 'X')

    this.setState(prevState => ({
          board,
          player: prevState.player === 'X' ? 'O' : 'X',
          winner: isWinner
        }
      )
    )

  }

  //fixme check for columns and diagonal
  winner (board, player) {

    for (let i = 0; i < board.length; i++) {
        if(board[i][0] === board[i][1] && board[i][0] === board[i][2]  && board[i][0] === player){
          return player
        }
    }
    return null;
  }

  //fixme the css is turning rows into columns and vice versa
  render () {
    const {board, winner, player} = this.state
    const status = winner ? `player ${player} won!` : `next player: ${player}`
    return (
      <div className="board">
        <div className="status">{status}</div>
        {board.map((row, rowIndex) =>
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) =>
              <Cell key={colIndex} rowIndex={rowIndex} colIndex={colIndex} value={board[rowIndex][colIndex]}
                    handleClick={this.handleClick}/>
            )}
          </div>
        )}
      </div>
    )
  }

}

export default Board