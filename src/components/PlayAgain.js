import React from 'react';

const PlayAgain = (props) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost'
        ? 'Game Over Better Luck Next time !!'
        : 'Nice you Won the game'}
    </div>
    <button onClick={props.done}> Play Again </button>
  </div>
);

export default PlayAgain;
