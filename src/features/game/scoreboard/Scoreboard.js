import React, { useEffect } from 'react'

import { fetchPokemon } from '../../pokemon/pokemonSlice'
import { selectGameLoaded, selectAllCards, selectHighScore, selectTotalCardFlips, selectMatchedCards, setHighScore, resetGame } from '../gameSlice'
import { useSelector, useDispatch} from 'react-redux'
import './Scoreboard.scss'

const Scoreboard = () => {
  const dispatch = useDispatch()
  const gameLoaded = useSelector(selectGameLoaded);
  const allCards = Object.values(useSelector(selectAllCards))
  const matchedCards = useSelector(selectMatchedCards)
  const cardFlips = useSelector(selectTotalCardFlips)
  const highScore = useSelector(selectHighScore)

  useEffect(() => {
    if (allCards.length === 0 ) return 
    if (allCards.length === matchedCards.length && (highScore === 0 || cardFlips < highScore)) {
      dispatch(setHighScore(cardFlips))
    }
  }, [matchedCards, allCards, highScore, cardFlips, dispatch])

  // useEffect(() => {
  //   console.log(highScore)
  // },[highScore])

  return (
    <>
      {gameLoaded && allCards.length > 0 && 
        <>
          <div>Scoreboard (lower is better)</div>
          { highScore !== 0 && <div>Record: {highScore}</div>}
          <div>Current score: {cardFlips}</div>
          { matchedCards.length === allCards.length && 
            <div 
              className={'new-game'}
              onClick={(e)=> {
                dispatch(resetGame())
                dispatch(fetchPokemon({pokemon: 151, cardPair: 6}))
                e.target.style.visibility = 'hidden'
              }}
            >New Game?</div>
          }
        </>
        }
    </>
  )
}

export default Scoreboard