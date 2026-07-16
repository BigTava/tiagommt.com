import { RootState } from 'typings/base.types'
import { TRestFramework, TWebType } from 'typings/configuration.types'

export const selectRestFramework = (state: RootState): TRestFramework =>
  state.configuration.restFramework

export const selectWebType = (state: RootState): TWebType => state.configuration.webType
