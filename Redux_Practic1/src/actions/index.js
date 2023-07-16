export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesAdd = (heroes) => {
    return {
        type: 'HEROES_ADD',
        payload: heroes
    }
}

export const heroesDelete = (heroesId) => {
    return {
        type: 'HEROES_DELETE',
        payload: heroesId
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const activeFilterChanget = (filterType) => {
    return {
        type: 'ACTIVE_FILTER_CHANGET',
        payload: filterType
    }
}