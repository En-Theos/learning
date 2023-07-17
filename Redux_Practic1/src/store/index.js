import { configureStore } from "@reduxjs/toolkit"

import filters from '../slices/filters';
import heroes from '../slices/heroes';

const store = configureStore({
    reducer: {filters, heroes},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;