import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards:{},
  cardsFlipped: 0,
  highScore: 0,
  cardPairs: 0,
  difficulty: 5,
};

export const gameSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetGame: (state) => {
      state.cards = {}
      state.cardsFlipped = 0
      state.cardPairs = 0
    },
    setCardPairs: (state, {payload}) => {
      state.cardPairs = payload
    },
    addCard: (state, {payload}) => {
      state.cards[payload.id] = payload
    },
    setDifficulty: (state, {payload}) => {
      state.difficulty = payload
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
          matched: false,
          loaded: false
        })
      })
      state = newState;
    },
    setHighScore: (state, {payload}) => {
      state.highScore = payload
    },
    playerCardFlip: (state, {payload}) => {
      payload.forEach((card) => {
        state.cards[card.id].visible = !card.visible
        state.cardsFlipped += 1
      })
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
    },
    cardLoad: (state, {payload}) => {
      state.cards[payload].loaded = true;
    }
  }
})

export const { addCard, setCards, flipCard, matchedCard, cardLoad, playerCardFlip, setHighScore, resetGame, setCardPairs, setDifficulty } = gameSlice.actions;


export const selectCardPairs = (state) => state.game.cardPairs;

export const selectAllCards = (state) => Object.values(state.game.cards);

export const selectVisibleCards = state => Object.values(state.game.cards).filter(card => card.visible && card.matched !== true ).map(card => card)

export const selectMatchedCards = state => Object.values(state.game.cards).filter(card => card.matched).map(card => card)

export const selectCardLoadState = (state, cardId)=> state.game.cards[cardId].loaded

export const selectGameLoaded = state => Object.values(state.game.cards).length === Object.values(state.game.cards).filter(card => card.loaded === true ).map(card => card).length

export const selectHighScore = state => state.game.highScore

export const selectTotalCardFlips = state => state.game.cardsFlipped

export const selectDifficulty = state => state.game.difficulty

export default gameSlice.reducer;
