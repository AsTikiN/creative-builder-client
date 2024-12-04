import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CreativesPage } from "@/pages/Creatives";
import { MainPage } from "@/pages/Main";

import { routes } from "@config/routes";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { CreativePage } from "@/pages/Creative";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.main()} element={<SidebarLayout />}>
          <Route index element={<MainPage />} />
          <Route path={routes.creatives()} element={<CreativesPage />} />
          <Route path={routes.creative(":id")} element={<CreativePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
