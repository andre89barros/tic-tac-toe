import React, { Component } from 'react'
import Cell from '../cell'

const INITIAL_STATE_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

class Board extends Component {

  constructor (props) {
    super(props)

    this.state = {
      board: INITIAL_STATE_BOARD,
      player: 'X'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (rowIndex, colIndex) {

    const board = this.state.board
    board[rowIndex][colIndex] = this.state.player

    this.setState(prevState => ({
          board,
          player: prevState.player === 'X' ? 'O' : 'X'
        }
      )
    )

  }

  render () {
    const {board} = this.state
    return (
      <div className="board">
        {board.map((row, rowIndex) =>
          <div className="row">
            {row.map((cell, colIndex) =>
              <Cell rowIndex={rowIndex} colIndex={colIndex} value={board[rowIndex][colIndex]}
                    handleClick={this.handleClick}/>
            )}
          </div>
        )
        }
      </div>
    )
  }

}

export default Board