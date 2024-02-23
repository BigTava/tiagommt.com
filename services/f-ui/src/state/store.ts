// Redux
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './global/reducer'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
