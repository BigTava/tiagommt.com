import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './global/reducer'
import web3Reducer from './web3/reducer'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    web3: web3Reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
