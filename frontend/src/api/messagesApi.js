import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/messages',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`);
      headers.set('Content-Type', 'application/json; charset=utf-8');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => '',
      providesTags: ['Messages'],
    }),
    addMessage: builder.mutation({
      query: (payload) => ({
        url: '',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Messages'],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useAddMessageMutation,
} = messagesApi;
