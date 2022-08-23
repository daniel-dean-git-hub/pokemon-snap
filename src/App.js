import React from 'react';
import { useSelector } from 'react-redux'
import Game from './features/game/Game';
import DifficultySelection from './features/game/difficulty/difficultySelection.js'
import './App.scss';
import { selectCardPairs } from '../src/features/game/gameSlice.js';
import Scoreboard from './features/game/scoreboard/Scoreboard.js'

function App() {
  const cardPairs = useSelector(selectCardPairs);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1>Pokémon Snap</h1>
          <Scoreboard />
        </div>

          { 
            cardPairs > 0 
              ? <Game pairs={cardPairs}/> 
              : <DifficultySelection />
          }
      </header>
    </div>
  );
}

export default App;
