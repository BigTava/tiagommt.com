import { store } from 'state/store'

import { ERestFramework } from './configuration.types'

export type TRestFrameworksToDevelopmentBaseUrl = Partial<{ [K in ERestFramework]: string }>

export enum EEnv {
  Development = 'development',
}

export type RootState = ReturnType<typeof store.getState>
