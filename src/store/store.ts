import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './slices/commonSlice'
export const store = configureStore({
  reducer: {
      common: commonSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
