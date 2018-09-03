import React from 'react'


const Cell = ({rowIndex, colIndex, value, handleClick}) => {

  return (
    <button
    onClick={(e) => handleClick(rowIndex, colIndex)}
    className="square"
  >
    {value}
  </button>)
}


export default Cell