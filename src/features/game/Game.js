import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardGrid from './cardGrid/CardGrid'
import { selectAllCards } from '../game/gameSlice'
import './Game.scss'

const Game = () => {
  const cards = useSelector(selectAllCards);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Pokémon Snap</h1>
      <CardGrid cardList={cards}/>     
    </main>
  )
}

export default Game