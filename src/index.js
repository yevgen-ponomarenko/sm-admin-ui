import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  function Square(props) {
        return (
            <button 
                className="square" 
                onClick={props.onClick}
            >
            {props.value}
            </button>
        );
    }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            next: 'X'
        };
    }

    hanndleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.next;
        this.setState({squares: squares, next: this.state.next === 'X' ? 'O' : 'X'});
    }

    renderSquare(i) {
      return (
      <Square 
        value={this.state.squares[i]} 
        onClick={()=>this.hanndleClick(i)}
      />);
    }

    renderSquares(dimension) {
      let rows = [];
      for (let i = 0; i < dimension; i++) {
        let columns = [];
        for (let j = 0; j < dimension; j++) {
          columns.push(this.renderSquare(i*dimension + j));
        }
        rows.push(<div className="board-row">{columns}</div>)
      }
      return(rows);
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status = winner ? `Winner is ${winner}` :  `Next player: ${this.state.next}`;
  
      return (
        <div>
          <div className="status">{status}</div>
          {this.renderSquares(3)}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  