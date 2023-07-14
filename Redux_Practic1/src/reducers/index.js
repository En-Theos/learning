const initialState = {
    heroes: [],
    loadingStatus: 'idle',
    filters: [],
    activeFilter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING':
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                loadingStatus: 'idle'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                loadingStatus: 'idle'
            }
        case 'HEROES_FETCHED_ADD':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                loadingStatus: 'idle'
            }
        case 'HEROES_FETCHED_DELETE':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload),
                loadingStatus: 'idle'
            }
        case 'FETCHING_ERROR':
            return {
                ...state,
                loadingStatus: 'error'
            }
        case 'FILTER':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default reducer;