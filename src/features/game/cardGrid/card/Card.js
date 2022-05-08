import React, { useEffect } from 'react'
import './Card.scss'

import { useSelector, useDispatch } from 'react-redux'
import { flipCard, selectVisibleCards, matchedCard, selectCardLoadState, cardLoad, playerCardFlip } from '../../gameSlice'

import Placeholder from './placeholder/Placeholder'

const Card = ({id, name, image, visible, matched}) => {
    const dispatch = useDispatch()
    const visibleCards = useSelector(selectVisibleCards)    
    const cardLoadState = useSelector(state => selectCardLoadState(state, id))

    useEffect(() => {
        if (!cardLoadState) return       
        if (visibleCards.length === 2) {
            // waits until both cards are loaded before comparing them
            if (!visibleCards[1].loaded) return        
            if (visibleCards[0].name === visibleCards[1].name) {
                dispatch(matchedCard(visibleCards))
            } else {
                setTimeout(() => dispatch(flipCard(visibleCards)), 1000)
            }
        }
    },[visibleCards, dispatch, cardLoadState])
    
    const flip = () => {
        if (!cardLoadState) return
        if (visibleCards.length < 2) {
            if (!matched) dispatch(playerCardFlip([{id,visible}]))
        }
    }

    return (
        <div className="card" 
            style={{ background: '#3a6699', overflow: 'hidden' }} 
            onClick={flip}
        >
            <Placeholder rotate={!cardLoadState} showPlaceholder={!visible} />
            <img 
                draggable={false}
                height="475"
                width="475"
                className={cardLoadState ? '' : 'loading'} 
                src={image} 
                alt={name} 
                style={!visible || !cardLoadState ? { visibility: 'hidden', display: 'none' } : { visibility: 'visible', display: 'block', background: '#e0d59b'}} 
                onLoad={() => dispatch(cardLoad(id))}
            />
        </div>
    )
}

export default Card