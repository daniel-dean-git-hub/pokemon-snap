import React from 'react'
import './Card.scss'

import { useSelector, useDispatch } from 'react-redux'
import { flipCard, selectVisibleCards, selectMatchedCards } from '../../gameSlice'

const Card = ({id, name, image, visible, matched}) => {
    const dispatch = useDispatch()



    const cardDisplay = () => {
        return visible ? <><h3>{name}</h3><img src={image} alt={name} /></>
           : <img src="https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png" alt="card-back"/>
    }

    return (
        <div className="card" onClick={() => dispatch(flipCard({id,visible}))}>
            {cardDisplay()}
        </div>
    )
}

export default Card