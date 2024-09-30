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
import { BookCard } from "@components/BookCard";

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);
  console.log(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SidebarLayout>
        <BookCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="To Kill a Mockingbird"
          date="Nov 23, 2024 at 8:12 PM"
        />
        <BookCard title="1984" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard title="Pride and Prejudice" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="The Catcher in the Rye"
          date="Nov 23, 2024 at 8:12 PM"
        />
      </SidebarLayout>

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
