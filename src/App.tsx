import { CssBaseline, styled, ThemeProvider } from "@mui/material";
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
import { OfferCard } from "@components/Card/OfferCard";
import { AppRoutes } from "@modules/AppRoutes";

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppRoutes />

      {/* <SidebarLayout> */}
      {/* <BookCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="To Kill a Mockingbird"
          date="Nov 23, 2024 at 8:12 PM"
        />
        <BookCard title="1984" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard title="Pride and Prejudice" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="The Catcher in the Rye"
          date="Nov 23, 2024 at 8:12 PM"
        /> */}

      {/* <CardsList>
          <OfferCard
            title="Unlock Your Growth: 30-Day Marketing Mastery Program"
            date="November 23, 2024 at 8:12 PM"
          />
          <OfferCard
            title="Unlock Your Growth: 30-Day Marketing Mastery Program"
            date="November 23, 2024 at 8:12 PM"
          />
          <OfferCard
            title="Unlock Your Growth: 30-Day Marketing Mastery Program"
            date="November 23, 2024 at 8:12 PM"
          />
        </CardsList> */}
      {/* </SidebarLayout> */}

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

const CardsList = styled("div")`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing(5)};

  & > * {
    flex-basis: calc(33.33% - ${({ theme }) => theme.spacing(5)});
    max-width: calc(33.33% - ${({ theme }) => theme.spacing(5)});
    min-width: 305px;
  }
`;
