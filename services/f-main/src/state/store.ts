import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from 'rest/rtk-client'

import configurationReducer from './configuration/configuration.slice'

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),

  devTools: import.meta.env.REACT_APP_VARIABLE !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
