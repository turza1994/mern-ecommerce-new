import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
