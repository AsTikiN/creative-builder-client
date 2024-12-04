import "./App.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Outlet } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { PrimeReactProvider } from "primereact/api";

import { CssBaseline } from "@mui/material";
import { AppRoutes } from "@modules/AppRoutes";
import { apolloClient } from "@config/apollo";

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <PrimeReactProvider>
        <CssBaseline />
        <AppRoutes />
        <Outlet />
      </PrimeReactProvider>
    </ApolloProvider>
  );
};
