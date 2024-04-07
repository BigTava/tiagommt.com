import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

import { selectRestFramework } from 'state/configuration/configuration.selectors'
import { EEnv, RootState, TRestFrameworksToDevelopmentBaseUrl } from 'typings/base.types'
import { ERestFramework } from 'typings/configuration.types'

const REST_FRAMEWORK_TO_DEVELOPMENT_BASE_URL: TRestFrameworksToDevelopmentBaseUrl = {
  [ERestFramework.ACTIX]: 'http://localhost:8001',
}

const ENV_TO_BASE_URLS: { [K in EEnv]: TRestFrameworksToDevelopmentBaseUrl } = {
  [EEnv.Development]: REST_FRAMEWORK_TO_DEVELOPMENT_BASE_URL,
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: '',
})

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const restFramework = selectRestFramework(api.getState() as RootState)

  if (!restFramework) {
    return {
      error: {
        status: 400,
        statusText: 'Bad Request',
        data: 'No rest framework received',
      },
    }
  }

  const baseUrl = ENV_TO_BASE_URLS[import.meta.env.MODE as EEnv][restFramework]
  const urlEnd = typeof args === 'string' ? args : args.url
  const adjustedUrl = `{${baseUrl}/${urlEnd}}`
  const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }
  return rawBaseQuery(adjustedArgs, api, extraOptions)
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: dynamicBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
})
