import React, { useEffect, useState } from 'react'
import './Card.scss'

import { useSelector, useDispatch } from 'react-redux'
import { flipCard, selectVisibleCards, matchedCard } from '../../gameSlice'

const Card = ({id, name, image, visible, matched}) => {
    const dispatch = useDispatch()
    const visibleCards = useSelector(selectVisibleCards)
    const [loading, setLoading] = useState('loading')
    
    const cardDisplay = () => {
        if (!visible) return <img src="https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png" alt="card-back"/>
        
        return (
            <>
                { loading=== 'loading' && <img className='rotate' src={'https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png'} style={{maxHeight: 475}} alt={loading} /> }
                <img className={loading} src={image} alt={name} onLoad={() => setLoading('')}/>
            </>
        )
    }

    useEffect(() => {
        if (visibleCards.length === 2) {
            if (visibleCards[0].name === visibleCards[1].name) {
                dispatch(matchedCard(visibleCards))
            } else {
                setTimeout(() => dispatch(flipCard(visibleCards)), 1000)
            }
        }
    },[visibleCards, dispatch])
    
    const flip = () => {
        if (visibleCards.length < 2) {
            if (!matched) dispatch(flipCard([{id,visible}]))
        }
    }

    return (
        <div className="card" onClick={flip}>
            {cardDisplay()}
        </div>
    )
}

export default Card