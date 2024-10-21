import { Outlet } from "react-router-dom";
import AccountSidebarLayout from "./layouts/SidebarLayout";
import { useRenderPageDataByRoute } from "@/hooks/useRenderPageDataByRoute";

export const AccountSettingsPage = () => {
  const { title, description } = useRenderPageDataByRoute();

  return (
    <AccountSidebarLayout
      headerProps={{
        title,
        description,
      }}
    >
      <Outlet />
    </AccountSidebarLayout>
  );
};
