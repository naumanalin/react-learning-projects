import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userAPIs'

export const store = configureStore({
  reducer: {
    users: userSlice
  },
})