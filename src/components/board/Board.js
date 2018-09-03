import React, { Component } from 'react'

const INITIAL_STATE_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

class Board extends Component {

  constructor (props) {
    super(props)

    this.state = {
      board : INITIAL_STATE_BOARD,
      player: 'X'
    }
  }

  render () {
    return (
      <div>

      </div>
    )
  }

}

export default Board