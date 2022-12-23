import { apiSlice } from "../../app/api/apiSlice";

export const beritaApi = apiSlice.injectEndpoints({
    tagTypes: ['Berita'],
    endpoints: (builder) => ({
        getAllBerita: builder.query({
            query: () => '/berita',
            providesTags: ['Berita']
        }),
        deleteBerita: builder.mutation({
            query: (id) => `/berita/${id}`,
            method: 'DELETE',
            invalidatesTags: ['Berita']
        })
    })
})

export const {
    useGetAllBeritaQuery,
    useDeleteBeritaMutation,
} = beritaApi