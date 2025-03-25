import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/channels',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`);
      headers.set('Content-Type', 'application/json; charset=utf-8');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
      providesTags: ['Channels'],
    }),
  }),
});

export const {
  useGetChannelsQuery,
} = channelsApi;
