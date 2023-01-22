import { configureStore } from '@reduxjs/toolkit'
import searchSliceReducer from './searchSlice'
import searchExtendedSliceReducer from './searchExtendedSlice'
export const store = configureStore({
  reducer: { search: searchSliceReducer, searchExtended: searchExtendedSliceReducer },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
