import { Outlet } from "react-router-dom";
import { BrandSidebarLayout } from "./layouts/SidebarLayout";

export const BrandSettings = () => {
  return (
    <BrandSidebarLayout
      headerProps={{
        title: "General",
        description: "Provide essential details about your brand",
      }}
    >
      <Outlet />
    </BrandSidebarLayout>
  );
};
