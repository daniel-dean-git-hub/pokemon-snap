import React from 'react'

const Placeholder = ({rotate = false, showPlaceholder = false}) => {
    return (
        <>
            <img 
                draggable={false}
                style={showPlaceholder ? { display: 'block' } : { display: 'none' }}  
                src="https://ssb.wiki.gallery/images/7/7b/Pok%C3%A9_Ball_Origin.png" 
                alt="card-back"
                className={rotate ? 'rotate' : ''}
            />  
        </>
    )
}

export default Placeholder