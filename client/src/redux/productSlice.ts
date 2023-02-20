import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as api from '../api/index'

export interface ProductState {
  isLoading: boolean
  products:
    | [
        {
          _id: string
          title: string
          message: string
          creator: string
          tags: [string]
          selectedFile: string
          likeCount: number
          createdAt: string
          __v: number
        }
      ]
    | []
  error: string | null
}

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  let { data } = await api.getProducts()
  data = data.slice(0, 4)
  data = [...data, ...data]
  //sort(() => Math.random() - 0.5)
  return data
})

export const loadMoreProducts = createAsyncThunk(
  'product/loadMoreProducts',
  async () => {
    let { data } = await api.getProducts()
    data = data.slice(0, 4)
    return data
  }
)

// export const addPost = createAsyncThunk(
//   'contacts/addProduct',
//   async (newPost: any) => {
//     const { data } = await api.addPost(newPost)
//     return data
//   }
// )

const initialState: any = {
  isLoading: false,
  products: [],
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Get All Products
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message
      })
      //Load More Products
      .addCase(loadMoreProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadMoreProducts.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.products = [...state.products, ...action.payload]
      })
      .addCase(loadMoreProducts.rejected, (state, action) => {
        state.error = action.error.message
      })

    //Creating a post
    // .addCase(addPost.pending, (state) => {
    //   state.isLoading = true
    // })
    // .addCase(addPost.fulfilled, (state, action: PayloadAction<PostState>) => {
    //   state.isLoading = false
    //   state.posts.push(action.payload)
    // })
    // .addCase(addPost.rejected, (state, action) => {
    //   state.error = action.error.message
    // })
  },
})

export default productSlice.reducer
