import React, { useState, useEffect } from 'react'

import { fetchPokemon } from '../../pokemon/pokemonSlice'
import { selectGameLoaded, selectAllCards, selectHighScore, selectTotalCardFlips, selectMatchedCards, setHighScore, resetGame } from '../gameSlice'
import { useSelector, useDispatch} from 'react-redux'

const Scoreboard = () => {
  const dispatch = useDispatch()
  const [gameStart, setGameStart] = useState(false)
  const allCards = Object.values(useSelector(selectAllCards))
  const loadedCards = useSelector(selectGameLoaded)
  const matchedCards = useSelector(selectMatchedCards)
  const cardFlips = useSelector(selectTotalCardFlips)
  const highScore = useSelector(selectHighScore)

  useEffect(() => {
    allCards.length === loadedCards.length 
    ? setGameStart(true)
    : setGameStart(false)
  }, [allCards, loadedCards])

  useEffect(() => {
    if (allCards.length === 0 ) return 
    if (allCards.length === matchedCards.length && (highScore === 0 || cardFlips < highScore)) {
      dispatch(setHighScore(cardFlips))
    }
  }, [matchedCards, allCards, highScore, cardFlips, dispatch])

  useEffect(() => {
    console.log(highScore)
  },[highScore])

  return (
    <>
      {!gameStart && <div>Game loading...</div>}
      {gameStart && 
        <>
          <div>Scoreboard (lower is better)</div>
          { highScore !== 0 && <div>Record: {highScore}</div>}
          <div>Current score: {cardFlips}</div>
          { matchedCards.length === allCards.length && 
            <div 
              onClick={()=> {
                dispatch(resetGame())
                dispatch(fetchPokemon({pokemon: 151, cardPair: 6}))
              }}
            >New Game?</div>
          }
        </>
        }
    </>
  )
}

export default Scoreboard