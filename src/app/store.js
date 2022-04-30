import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    pokemon: pokemonReducer,
  },
});
