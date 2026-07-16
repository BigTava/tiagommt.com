import { configureStore } from '@reduxjs/toolkit'

import configurationReducer from './configuration/configuration.slice'

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: import.meta.env.MODE !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
