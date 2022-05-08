import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pokemonData } from './pokemonApi'

const initialState = { 
    details: {},
    loading: false,
    error: false,
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async ({ pokemon, cardPair }) => {
        const response = await pokemonData(pokemon, cardPair)
        return response
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        clearPokemon: state => {
            state.details = {}
            state.loading = false
            state.error = false
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchPokemon.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            action.payload.forEach(pokemon => {
                state.details[pokemon.name] = pokemon
            })

            state.loading = false
            state.error = false
        })
        builder.addCase(fetchPokemon.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }
})

export const { clearPokemon } = pokemonSlice.actions;

export const selectPokemon = (state) => state.pokemon.details;

export default pokemonSlice.reducer