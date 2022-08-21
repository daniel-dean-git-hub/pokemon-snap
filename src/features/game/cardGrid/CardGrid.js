import React from 'react'
import './CardGrid.scss'
import Card from './card/Card'
import { useSelector } from 'react-redux'
import { selectGameLoaded } from '../gameSlice'

const CardGrid = ({cardList}) => {
    const cards = Object.values(cardList).map(({id, name, image, visible, matched}) => 
        <Card
            key={id}
            id={id}
            name={name}
            image={image}
            visible={visible}
            matched={matched}
        />
    )

    const gameLoaded = useSelector(selectGameLoaded);

    return (
        <div style={!gameLoaded ? {visibility: 'hidden'} : {}} className="card-grid">{cards}</div>
    )
}

export default CardGrid