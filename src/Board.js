import React from 'react';


function Square(props) {
    const className = 'square' + (props.highlight ? ' highlight' : '');

    return (
      <button className={className} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      const winningSquares = this.props.winningSquares;

      return (
        <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          highlight={winningSquares && winningSquares.includes(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  export default Board;