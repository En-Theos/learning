export const fetching = () => {
    return {
        type: 'FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const heroesFetchedAdd = (heroes) => {
    return {
        type: 'HEROES_FETCHED_ADD',
        payload: heroes
    }
}

export const heroesFetchedDelete = (heroesId) => {
    return {
        type: 'HEROES_FETCHED_DELETE',
        payload: heroesId
    }
}

export const fetchingError = () => {
    return {
        type: 'FETCHING_ERROR'
    }
}

export const filter = (filterType) => {
    return {
        type: 'FILTER',
        payload: filterType
    }
}