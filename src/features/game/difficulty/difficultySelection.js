import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCardPairs } from '../gameSlice.js';
import './difficultySelection.scss'

const DifficultySelection = () => {
    const dispatch = useDispatch();
    const [customDifficulty, setCustomDifficulty] = useState(5);
    
    return (
        <>
            <div>DifficultySelection</div>
            <button onClick={()=> dispatch(setCardPairs(2))}>Easy</button>
            <button onClick={()=> dispatch(setCardPairs(4))}>Medium</button>
            <button onClick={()=> dispatch(setCardPairs(8))}>Hard</button>
            <input type="range" min="1" max="10" value={customDifficulty} onChange={(e)=> setCustomDifficulty(e.target.value)} />
            <button onClick={()=> dispatch(setCardPairs(customDifficulty))}>Custom</button>
        </>
    )
}

export default DifficultySelection