import { apiSlice } from './rtk-client'

export const cvApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /* GET */
    getCv: builder.mutation({
      query: () => ({
        url: '/cv',
        method: 'GET',
        responseHandler: async (response) => response.blob(),
        validateStatus: (response, result) => response.status === 200 && !result?.isError,
        cache: 'no-cache',
      }),
    }),
  }),
})

export const { useGetCvMutation } = cvApiSlice
