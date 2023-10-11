import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    resetCart: (state) => {
      state.cartItems = cartItems;
    },
    // increaseCart: (state) => {
    //   state.amount = amount + 1;
    // },
    // decreaseCart: (state) => {
    //   state.amount = amount > 1 ? amount - 1 : 0;
    // },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeCartItem,
  resetCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;
