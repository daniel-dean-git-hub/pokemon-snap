import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardGrid from './cardGrid/CardGrid'
import { selectAllCards } from '../game/gameSlice'
import { fetchPokemon, selectPokemon } from '../pokemon/pokemonSlice'
import './Game.scss'

const Game = () => {
  const cards = useSelector(selectAllCards);
  const dispatch = useDispatch();

  const pokemon = useSelector(selectPokemon);


  useEffect(() => {
    dispatch(fetchPokemon())
  },[])
  
  console.log(pokemon)


  return (
    <main>
      <h1>Pokémon Snap</h1>
      <CardGrid cardList={cards}/>     
    </main>
  )
}

export default Game