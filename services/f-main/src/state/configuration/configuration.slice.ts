import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TRestFramework, TWebType } from 'typings/configuration.types'

export type TConfigurationState = {
  webType: TWebType | null
  restFramework: TRestFramework | null
}

export const initialConfigurationState: TConfigurationState = {
  webType: null,
  restFramework: null,
}

export const configurationSlice = createSlice({
  name: 'configurationSlice',
  initialState: initialConfigurationState as TConfigurationState,
  reducers: {
    resetApp: () => initialConfigurationState,

    updateWebType: (state, action: PayloadAction<TWebType | null>) => {
      state.webType = action.payload
    },
    updateRestFramework: (state, action: PayloadAction<TRestFramework>) => {
      state.restFramework = action.payload
    },
  },
})

export const { resetApp, updateWebType, updateRestFramework } = configurationSlice.actions

export default configurationSlice.reducer
