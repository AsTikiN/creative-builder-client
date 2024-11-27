import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout } from '@store/features/auth';
import { RootState } from '..';

const MOCK_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDYzNjZkMTRmMGU3YWJjZjk2YWM1ZCIsImlhdCI6MTczMjY1NDcwMSwiZXhwIjoxNzM1MjQ2NzAxfQ.28GXgpFYkirDtzrwcoE_4246fMKK4xhRciUAP9KVuV0";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.NEXT_PUBLIC_API_URL || "http://localhost:9000",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;

    if (state.auth.accessToken) {
      headers.set("Authorization", state.auth.accessToken);
    }
    headers.set("Authorization", `Bearer ${MOCK_TOKEN}`);

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
