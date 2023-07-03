import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { medicineApi } from '../services/medicine'

export const store = configureStore({
  reducer: {
    [medicineApi.reducerPath]:medicineApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicineApi.middleware),


})

setupListeners(store.dispatch)