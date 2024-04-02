// Redux
import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './global/reducer'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: import.meta.env.REACT_APP_VARIABLE !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
