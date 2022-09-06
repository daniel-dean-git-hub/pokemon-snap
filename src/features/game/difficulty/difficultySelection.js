import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCardPairs, setDifficulty, selectDifficulty } from '../gameSlice.js';
import './difficultySelection.scss'

const DifficultySelection = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const customDifficulty = useSelector(selectDifficulty);

    const quickDifficulty = (difficulty) => {
        dispatch(setDifficulty(difficulty)) 
        dispatch(setCardPairs(difficulty))
    }

    useEffect(() => {
        const changeLoad = () => setLoading(false);

        window.addEventListener('load', changeLoad);

        return () => window.removeEventListener('load', changeLoad)
    })

    return (
        <>
            {
                loading 
                ?   <h1>LOADING...</h1> 
                :   <div className="difficulty-container">
                        <h2>Difficulty Selection</h2>
                        <button onClick={()=> quickDifficulty(2)}>Easy</button>
                        <button onClick={()=> quickDifficulty(4)}>Medium</button>
                        <button onClick={()=> quickDifficulty(8)}>Hard</button>
                        <h3>Custom Difficulty</h3>
                        <input type="range" min="1" max="10" value={customDifficulty} onChange={(e)=> dispatch(setDifficulty(e.target.value))} />
                        <button onClick={()=> dispatch(setCardPairs(customDifficulty))}>{customDifficulty}</button>
                    </div>
            }
        </>
    )
}

export default DifficultySelection