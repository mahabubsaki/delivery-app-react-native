import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers/basketReducer';
import restaurentReducer from './reducers/restaurentReducer';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurent: restaurentReducer
    },
});