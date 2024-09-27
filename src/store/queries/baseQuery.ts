import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout } from '@store/features/auth';
import { RootState } from '..';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;

    if (state.auth.accessToken) {
      headers.set('Authorization', state.auth.accessToken);
    }

    return headers;
  },
});

export const baseQueryWithLogout: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }

  return result;
};
