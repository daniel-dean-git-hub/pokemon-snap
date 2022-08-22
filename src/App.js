import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Game from './features/game/Game';
import './App.css';
import { selectCardPairs, setCardPairs } from '../src/features/game/gameSlice.js'

function App() {
  const dispatch = useDispatch();
  const cardPairs = useSelector(selectCardPairs);


  console.log(cardPairs)

  return (
    <div className="App">
      <header className="App-header">

        {cardPairs > 0 && <Game pairs={cardPairs}/> }


        {
          cardPairs === 0 && 
            <button onClick={(e) => {
              dispatch(setCardPairs(2))
            }}>TEST</button>
        }

      </header>
    </div>
  );
}

export default App;
