import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards:{}
};

export const gameSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, {payload}) => {
      state.cards[payload.id] = payload
    },
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

export const { addCard, setCards, flipCard, matchedCard } = gameSlice.actions;

export const selectAllCards = (state) => state.game.cards;

export const selectVisibleCards = state => Object.values(state.game.cards).filter(card => card.visible && card.matched !== true ).map(card => card)

export const selectMatchedCards = state => Object.values(state.game.cards).filter(card => card.matched).map(card => card)

export default gameSlice.reducer;
