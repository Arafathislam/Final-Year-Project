import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const medicineApi = createApi({
  reducerPath: 'medicineApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  
  
  endpoints: (builder) => ({
    getAllMedicine: builder.query({
      query: () => ({
        url:'medicine',
        method:'GET'
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMedicineQuery } = medicineApi