import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
