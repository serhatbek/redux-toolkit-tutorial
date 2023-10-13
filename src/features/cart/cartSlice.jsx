import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  // cartItems: cartItems,
  cartItems: [],
  cartAmount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(thunkAPI);
      // thunkAPI.dispatch(openModal());
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log(error.message);
      // console.log(thunkAPI.rejectWithValue(error.message));
    }
  }
);

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
    increaseCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.cartAmount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     // console.log(action);
  //     // console.log(action.payload);
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     // console.log('fghfg', action);
  //     state.isLoading = false;
  //   },
  // },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeCartItem,
  increaseCart,
  decreaseCart,
  calculateTotal,
} = cartSlice.actions;
