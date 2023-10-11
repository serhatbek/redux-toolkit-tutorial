import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 2,
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
    resetCart: (state) => {
      state.cartItems = cartItems;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, resetCart } = cartSlice.actions;
