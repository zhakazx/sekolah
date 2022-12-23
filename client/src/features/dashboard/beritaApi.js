import { apiSlice } from "../../app/api/apiSlice";

export const beritaApi = apiSlice.injectEndpoints({
    tagTypes: ['Berita'],
    endpoints: (builder) => ({
        getAllBerita: builder.query({
            query: () => '/berita',
            providesTags: ['Berita']
        }),
        getBerita: builder.query({
            query: (id) => `/berita/${id}`,
            providesTags: ['Berita']
        }),
        createBerita: builder.mutation({
            query: (data) => ({
                url: '/berita',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Berita']
        }),
        updateBerita: builder.mutation({
            query: ({id, ...data}) => ({
                url: `/berita/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Berita']
        }),
        deleteBerita: builder.mutation({
            query: (id) => ({
                url: `/berita/${id}`, 
                method: 'DELETE',
            }),
            invalidatesTags: ['Berita']
        })
    })
})

export const {
    useGetAllBeritaQuery,
    useGetBeritaQuery,
    useCreateBeritaMutation,
    useUpdateBeritaMutation,
    useDeleteBeritaMutation,
} = beritaApi