import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurent: {}
};

export const restaurentSlice = createSlice({
    name: 'restaurent',
    initialState,
    reducers: {
        setCurrentRestaurent: (state, action) => {
            state.restaurent = action.payload;
        }
    },
});

export const { setCurrentRestaurent } = restaurentSlice.actions;

export const restaurent = state => state.restaurent.restaurent;
export default restaurentSlice.reducer;
