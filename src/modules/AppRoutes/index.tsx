import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "@config/routes";

import { AppsPage } from "@/pages/Apps";
import { OffersPage } from "@/pages/Offers";
import { FunnelsPage } from "@/pages/Funnels";
import { EditBookPage } from "@/pages/EditBook";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.apps()} element={<AppsPage />} />
        <Route path={routes.offers()} element={<OffersPage />} />
        <Route path={routes.funnels()} element={<FunnelsPage />} />
        <Route path={routes.editBook(":id")} element={<EditBookPage />} />
      </Routes>
    </Router>
  );
};
