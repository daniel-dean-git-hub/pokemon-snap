import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards:[{
      id: 0,
      name: 'pikachu', 
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png',
      visible: false, 
      matched: false
  }, {
      id: 1,
      name: 'mewtwo',
      image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mewtwo/main.png',
      visible: false, 
      matched: false
  },{
    id: 2,
    name: 'pikachu', 
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png',
    visible: false, 
    matched: false
  }, {
    id: 3,
    name: 'mewtwo',
    image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mewtwo/main.png',
    visible: false, 
    matched: false
  },{
    id: 4,
    name: 'charmander', 
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    visible: false, 
    matched: false
  }, {
    id: 5,
    name: 'charmander',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    visible: false, 
    matched: false
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
      payload.forEach((card) => {
        state.cards[card.id].visible = !card.visible
      })
    },
    matchedCard: (state, {payload}) => {
      payload.forEach((card) => {
        state.cards[card.id].matched = true;
      })
    }
  }
})

export const { setCards, flipCard, matchedCard } = gameSlice.actions;

export const selectAllCards = (state) => state.game.cards;

export const selectVisibleCards = state => state.game.cards.filter(card => card.visible && card.matched !== true ).map(card => card)

export const selectMatchedCards = state => state.game.cards.filter(card => card.matched).map(card => card)

export default gameSlice.reducer;
