import React from 'react';
import Game from './features/game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game pairs={3}/>
      </header>
    </div>
  );
}

export default App;
