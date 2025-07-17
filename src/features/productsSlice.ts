import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductType'

interface ProductsState {
  poductList: ProductType[]
  currentProduct: ProductType | undefined
}

const initialState: ProductsState = {
  poductList: [],
  currentProduct: undefined,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<[]>) => {
      state.poductList = action.payload
    },
    getProduct: (state, action: PayloadAction<number>) => {
      state.currentProduct =
        state.poductList.find(
          (product: ProductType) => product.id === action.payload
        ) ?? undefined
    },
    addProduct: (state, action: PayloadAction<ProductType>) => {
      // const newProductList = state.poductList.filter(
      //   (product: ProductType) => product.id !== action.payload
      // )
      // state.poductList = newProductList
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const newProductList = state.poductList.filter(
        (product: ProductType) => product.id !== action.payload
      )

      state.poductList = newProductList
    },
  },
})

export const { setProductsList, addProduct, getProduct, deleteProduct } =
  productsSlice.actions
export default productsSlice.reducer
