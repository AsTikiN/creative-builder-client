import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

export type Mode = "dark" | "light";

export interface ThemeState {
  mode: Mode;
}

export const initialThemeState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
    toggleMode(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode, toggleMode } = themeSlice.actions;

export const selectMode = (state: RootState) => state.theme.mode;
