import React, { useState, useEffect }  from 'react';
import { useSelector } from 'react-redux'
import Game from './features/game/Game';
import DifficultySelection from './features/game/difficulty/difficultySelection.js'
import './App.scss';
import { selectCardPairs } from '../src/features/game/gameSlice.js';
import Scoreboard from './features/game/scoreboard/Scoreboard.js'

function App() {
  const [loading, setLoading] = useState(true)
  const cardPairs = useSelector(selectCardPairs);

  useEffect(() => {
    const changeLoad = () => setLoading(false);
    window.addEventListener('load', changeLoad);
    return () => window.removeEventListener('load', changeLoad)
  })

  if (loading) {
    return (
      <div className="App">
        <h1>LOADING</h1> 
      </div>
    )
  }

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
