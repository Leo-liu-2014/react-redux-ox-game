import React from 'react'

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
  
    {console.log(value)}
    { value }
  </button>
)

Square.defaultProps = {
  value: '',
}

Square.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
}

export default Square
