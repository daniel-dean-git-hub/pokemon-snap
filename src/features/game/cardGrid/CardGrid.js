import React from 'react'
import './CardGrid.scss'
import Card from './card/Card'

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

    return (
        <div className="card-grid">{cards}</div>
    )
}

export default CardGrid