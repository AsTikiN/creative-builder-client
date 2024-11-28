import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { selectMode } from "@store/features/theme";
import { useAppSelector } from "./store";
import { createTheme } from "./theme/index";
import "./App.css";
import { AppRoutes } from "@modules/AppRoutes";
import { Outlet } from "react-router-dom";

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <Outlet />
    </ThemeProvider>
  );
};
