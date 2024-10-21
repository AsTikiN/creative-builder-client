import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "@config/routes";

import { AppsPage } from "@/pages/Apps";
import { OffersPage } from "@/pages/Offers";
import { FunnelsPage } from "@/pages/Funnels";
import { EditBookPage } from "@/pages/EditBook";
import { Editor } from "@modules/Editor";
import { BrandSettings } from "@/pages/BrandSettings";
import { GeneralPage } from "@/pages/BrandSettings/pages/GeneralPage";
import { MembersPage } from "@/pages/BrandSettings/pages/MembersPage";
import { AccountSettingsPage } from "@/pages/AccountSettings";
import { ProfilePage } from "@/pages/AccountSettings/pages/ProfilePage";
import { AppearancePage } from "@/pages/AccountSettings/pages/AppearancePage";
import { NotificationsPage } from "@/pages/AccountSettings/pages/NotificationsPage";
import { PlansPage } from "@/pages/BrandSettings/pages/PlansPage";
import { AccountBillingPage } from "@/pages/AccountSettings/pages/BillingPage";
import { BrandBillingPage } from "@/pages/BrandSettings/pages/BillingPage";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.apps()} element={<AppsPage />} />
        <Route path={routes.offers()} element={<OffersPage />} />
        <Route path={routes.funnels()} element={<FunnelsPage />} />
        <Route path={routes.editBook(":id")} element={<EditBookPage />} />
        {/* <Route
          path={routes.accountSettings()}
          element={<AccountSettingsPage />}
        /> */}
        {/* <Route path={routes.appearance()} element={<AppearancePage />} /> */}
        <Route path={routes.editor()} element={<Editor />} />
        {/* <Route path={routes.notifications()} element={<Notifications />} /> */}

        <Route
          path={routes.accountSettings()}
          element={<AccountSettingsPage />}
        >
          <Route index element={<ProfilePage />} />
          <Route path={routes.appearance()} element={<AppearancePage />} />
          <Route
            path={routes.notifications()}
            element={<NotificationsPage />}
          />
          <Route path={routes.accountBilling()} element={<AccountBillingPage />} />
        </Route>

        <Route path={routes.brandSettings()} element={<BrandSettings />}>
          <Route index element={<GeneralPage />} />
          <Route path={routes.members()} element={<MembersPage />} />
          <Route path={routes.plans()} element={<PlansPage />} />
          <Route path={routes.brandBilling()} element={<BrandBillingPage />} />
        </Route>

        {/* <Route path={routes.plans()} element={<PlansPage />} /> */}
      </Routes>
    </Router>
  );
};
