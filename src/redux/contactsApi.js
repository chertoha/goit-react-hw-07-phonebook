import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://638b2cc57220b45d228a0228.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/pokemon`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
