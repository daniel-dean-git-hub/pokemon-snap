import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards:[{
      id: 0,
      name: 'pikachu', 
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png',
      visible: true, 
      matched: true
  }, {
      id: 1,
      name: 'mewtwo',
      image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mewtwo/main.png',
      visible: true, 
      matched: true
  },{
    id: 2,
    name: 'pikachu', 
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png',
    visible: false, 
    matched: true
  }, {
    id: 3,
    name: 'mewtwo',
    image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mewtwo/main.png',
    visible: true, 
    matched: true
  },{
    id: 4,
    name: 'charmander', 
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    visible: true, 
    matched: true
  }, {
    id: 5,
    name: 'charmander',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    visible: true, 
    matched: true
  }]
};

export const gameSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, {payload}) => {
      const newState = [];
      payload.forEach((card) => {
        const { id, name, image } = card
        newState.push({
          id: id,
          name: name,
          image: image,
          visible: false, 
          matched: false
        })
      })
      state = newState;
    },
    flipCard: (state, {payload}) => {
      state.cards[payload.id].visible = !payload.visible
    }  
  }
})

export const { setCards, flipCard } = gameSlice.actions;

export const selectAllCards = (state) => state.game.cards;

export const selectVisibleCards = state => state.game.cards.filter(card => card.visible).map(card => card.id)

export const selectMatchedCards = state => state.game.cards.filter(card => card.matched).map(card => card.id)

export default gameSlice.reducer;
