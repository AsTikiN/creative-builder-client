import { CssBaseline, ThemeProvider } from "@mui/material";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
// import { routes } from "@config/routes";
import { selectMode } from "@store/features/theme";
// import { MainLayout } from "@components/MainLayout";
// import { AuthGuard } from "@components/AuthGuard";
// import { Home } from "@modules/home";
// import { Login } from "@modules/auth/pages/Login";
// import { Signup } from "@modules/auth/pages/Signup";
// import { AuthLayout } from "@modules/auth/components/AuthLayout";
import { useAppSelector } from "./store";
import { createTheme } from "./theme/index";
import "./App.css";
import SidebarLayout from "./layouts/SidebarLayout";

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);
  console.log(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SidebarLayout />

      {/* <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={routes.login()} element={<Login />} />
            <Route path={routes.signup()} element={<Signup />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route element={<MainLayout />}>
              <Route path={routes.home()} element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
};
