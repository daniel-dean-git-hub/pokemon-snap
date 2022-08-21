import React, { useEffect } from 'react'
import { selectAllCards, selectHighScore, selectTotalCardFlips, selectMatchedCards, setHighScore } from '../gameSlice'
import { useSelector, useDispatch} from 'react-redux'
import './Scoreboard.scss'

const Scoreboard = () => {
  const dispatch = useDispatch()
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

  return (
    <div className="scoreboard-container" >
      <h2>Scoreboard (lower is better)</h2>
      <div className="scoreboard" >
        { highScore !== 0 && <span>Record: {highScore}</span>}
        <span>Current: {cardFlips}</span>
      </div>
    </div>
  )
}

export default Scoreboard