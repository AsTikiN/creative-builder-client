import { Outlet } from "react-router-dom";
import AccountSidebarLayout from "./layouts/SidebarLayout";

export const AccountSettingsPage = () => {
  return (
    <AccountSidebarLayout
      headerProps={{
        title: "General",
        description: "Provide essential details about your brand",
      }}
    >
      <Outlet />
    </AccountSidebarLayout>
  );
};
