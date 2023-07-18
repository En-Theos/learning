import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"

const filtersAdapter = createEntityAdapter({
    selectId: (filter) => filter[0]
});

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
});

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
        filtersFetched: (state, action) => {
            filtersAdapter.setAll( state, action.payload);
            state.filtersLoadingStatus = 'idle';
        },
        filtersFetchingError: state => {state.filtersLoadingStatus = 'error'},
        activeFilterChanget: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

const {reducer, actions} = filtersSlice;

export default reducer;

export const { selectAll } = filtersAdapter.getSelectors(state => state.filters)

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanget
} = actions