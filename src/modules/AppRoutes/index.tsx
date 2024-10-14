import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "@config/routes";

import { AppsPage } from "@/pages/Apps";
import { OffersPage } from "@/pages/Offers";
import { FunnelsPage } from "@/pages/Funnels";
import { EditBookPage } from "@/pages/EditBook";
import { AccountSettingsPage } from "@/pages/AccountSettingsPage";
import { AppearancePage } from "@/pages/AppearancePage";
import { Editor } from "@modules/Editor";
import Notifications from "@/pages/Notifications";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.apps()} element={<AppsPage />} />
        <Route path={routes.offers()} element={<OffersPage />} />
        <Route path={routes.funnels()} element={<FunnelsPage />} />
        <Route path={routes.editBook(":id")} element={<EditBookPage />} />
        <Route
          path={routes.accountSettings()}
          element={<AccountSettingsPage />}
        />
        <Route path={routes.appearance()} element={<AppearancePage />} />
        <Route path={routes.editor()} element={<Editor />} />
        <Route path={routes.notifications()} element={<Notifications />} />
      </Routes>
    </Router>
  );
};
