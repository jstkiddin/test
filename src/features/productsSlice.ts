import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductType'

interface ProductsState {
  poductList: ProductType[]
  currentProduct: ProductType | undefined
  modalAdd: boolean
  modalDelete: boolean
}

const initialState: ProductsState = {
  poductList: [],
  modalAdd: false,
  modalDelete: false,
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

      console.log(action.payload, state.currentProduct)
    },
    addProduct: state => {},
    deleteProduct: state => {},
    toggleAddModal: state => {},
    toggleDeleteModal: state => {},
  },
})

export const {
  setProductsList,
  addProduct,
  getProduct,
  deleteProduct,
  toggleAddModal,
  toggleDeleteModal,
} = productsSlice.actions
export default productsSlice.reducer
