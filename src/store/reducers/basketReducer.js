import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBaset: (state, action) => {
            const id = action.payload.id;
            const find = state.items.find(each => each.id === id);
            if (find) {
                find.quantity += 1;
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }];
            }
        },
        removeFromBasket: (state, action) => {
            const id = action.payload.id;
            const find = state.items.find(each => each.id === id);
            if (!find) return;
            if (find.quantity === 1) {
                state.items = [...state.items.filter(each => each.id !== action.payload.id)];
            } else if (find.quantity >= 1) {
                find.quantity -= 1;
            }
            console.log(state.items);
        },
        fullClearFromBasket: (state, action) => {
            state.items = [...state.items.filter(each => each.id !== action.payload.id)];
        },
        clearBasket: (state) => {
            state.items = [];
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToBaset, clearBasket, removeFromBasket, fullClearFromBasket } = basketSlice.actions;
export const items = state => state.basket.items;
export const total = state => state.basket.items.reduce((total, each) => {
    return total += (each.price * each.quantity);
}, 0);

export const itemsLenth = state => state.basket.items.reduce((total, each) => {
    return total += each.quantity;
}, 0);

export default basketSlice.reducer;