import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithLogout } from '@store/queries/baseQuery';

export const emptyApi = createApi({
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
