import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api, UserDto } from "@store/api";
import { RootState } from "@store/index";

export interface AuthenticateData {
  // user: UserDto;
  accessToken: string;
}

export interface AuthState {
  // user: UserDto | null;
  accessToken: string | null;
}

export const initialAuthState: AuthState = {
  // user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate: (state, action: PayloadAction<AuthenticateData>) => {
      // state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      // state.user = null;
      state.accessToken = null;
    },
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
  //       state.accessToken = action.payload.accessToken;
  //       state.user = action.payload.user;
  //     })
  //     .addMatcher(api.endpoints.signup.matchFulfilled, (state, action) => {
  //       state.accessToken = action.payload.accessToken;
  //       state.user = action.payload.user;
  //     }),
});

export const { authenticate, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.accessToken !== null;
