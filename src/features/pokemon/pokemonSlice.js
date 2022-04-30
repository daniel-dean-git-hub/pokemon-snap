import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pokemonData } from './pokemonApi'

const initialState = { 
    details: {},
    loading: false,
    error: false,
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async () => {
        const response = await pokemonData()

        return response
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {},
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

export const selectPokemon = (state) => state.pokemon.details;

export default pokemonSlice.reducer