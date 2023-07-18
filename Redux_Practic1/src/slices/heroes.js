import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"

const heroesAdapter = createEntityAdapter();

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
});

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        heroesFetching: state => { state.heroesLoadingStatus = 'loading' },
        heroesFetched: (state, action) => {
            heroesAdapter.setAll(state, action.payload);
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: state => { state.heroesLoadingStatus = 'error' },
        heroesAdd: (state, action) => {
            heroesAdapter.addOne(state, action.payload);
            state.heroesLoadingStatus = 'idle';
        },
        heroesDelete: (state, action) => {
            heroesAdapter.removeOne(state, action.payload);
            state.heroesLoadingStatus = 'idle';
        }
    }
});

const { reducer, actions } = heroesSlice;

export default reducer;

export const { selectAll } = heroesAdapter.getSelectors(state => state.heroes)

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroesAdd,
    heroesDelete
} = actions