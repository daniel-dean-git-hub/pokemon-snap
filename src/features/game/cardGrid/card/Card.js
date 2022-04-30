import React, { useEffect } from 'react'
import './Card.scss'

import { useSelector, useDispatch } from 'react-redux'
import { flipCard, selectVisibleCards, matchedCard } from '../../gameSlice'

const Card = ({id, name, image, visible, matched}) => {
    const dispatch = useDispatch()

    const visibleCards = useSelector(selectVisibleCards)
    //console.log(visibleCards)


    const cardDisplay = () => {
        return visible ? <><h3>{name}</h3><img src={image} alt={name} /></>
           : <img src="https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png" alt="card-back"/>
    }


    useEffect(() => {
        if (visibleCards.length === 2) {
            if (visibleCards[0].name === visibleCards[1].name) {
                console.log('match')
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