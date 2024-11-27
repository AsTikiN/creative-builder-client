import {
  createTheme as createMuiTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { Mode } from "@store/features/theme";
import { darkPalette } from "./palettes/darkPalette";
import { lightPalette } from "./palettes/lightPalette";
import { typography } from "./typography";
import { shape } from "./shape";

export const createTheme = (mode: Mode) => {
  const themeOptions: ThemeOptions = {
    palette: { ...(mode === "dark" ? darkPalette : lightPalette), mode },
    typography: typography,
    shape,
    spacing: (factor: number) => `${0.25 * factor}rem`,
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  };

  const theme = createMuiTheme(themeOptions);

  // Check if the theme is created correctly
  if (!theme.palette || !theme.shape || !theme.typography) {
    console.error("Theme creation failed: Some properties are missing");
    return createMuiTheme(); // Return a default theme as fallback
  }

  return theme;
};
