import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from '../constants';

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
export default postsApi;
