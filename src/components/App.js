import React, { useState } from 'react';

import Game from './Game';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game startNewGame={() => setGameId(gameId + 1)} key={gameId} />;
};

export default StarMatch;
