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
  }),
});

export const {
  useGetMessagesQuery,
} = messagesApi;
