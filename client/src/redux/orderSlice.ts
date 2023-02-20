import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as api from '../api/index'

export const getOrders = createAsyncThunk('product/getOrders', async () => {
  const { data } = await api.getOrders()
  return data
})

export const createOrder = createAsyncThunk(
  'contacts/createOrder',
  async (newOrder: any) => {
    const { data } = await api.createOrder(newOrder)
    return data
  }
)

const initialState: any = {
  isLoading: false,
  orders: [],
  error: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get All Orders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrders.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.orders = action.payload
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.error = action.error.message
      })

      //Creating an order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.orders.push(action.payload)
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default orderSlice.reducer
