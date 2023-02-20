import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  cartItems: {},
  price: 0,
  vat: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: any) => {
      const item = action.payload

      if (!state.cartItems[action.payload._id]) {
        item.qty = 1
        item.totalPrice = item.price
        item.totalVat = item.vat

        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            [item._id]: {
              ...item,
            },
          },
          price: state.price + item.price,
          vat: state.vat + item.vat,
          total: state.total + item.price + item.vat,
        }
      } else {
        if (
          state.cartItems[action.payload._id].countInStock >
          state.cartItems[action.payload._id].qty
        ) {
          item.qty = state.cartItems[action.payload._id].qty + 1
          item.totalPrice = item.price * item.qty
          item.totalVat = item.vat * item.qty

          return {
            ...state,
            cartItems: {
              ...state.cartItems,
              [item._id]: {
                ...item,
              },
            },
            price: state.price + item.price,
            vat: state.vat + item.vat,
            total: state.total + item.price + item.vat,
          }
        }
      }
    },

    decreaseQuantityFromCart: (state, action: any) => {
      const item2 = action.payload
      if (state.cartItems[action.payload._id].qty > 0) {
        item2.qty = state.cartItems[item2._id].qty - 1
        item2.totalPrice = item2.price * item2.qty
        item2.totalVat = item2.vat * item2.qty

        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            [item2._id]: {
              ...item2,
            },
          },
          price: state.price - item2.price,
          vat: state.vat - item2.vat,
          total: state.total - (item2.price + item2.vat),
        }
      }
    },

    removeFromCart: (state, action: any) => {
      const item3 = action.payload
      delete state.cartItems[item3._id]
    },
  },
})

export const { addToCart, decreaseQuantityFromCart, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
