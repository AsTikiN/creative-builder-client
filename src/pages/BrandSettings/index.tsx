import { Outlet } from "react-router-dom";
import { BrandSidebarLayout } from "./layouts/SidebarLayout";
import { useRenderPageDataByRoute } from "@/hooks/useRenderPageDataByRoute";

export const BrandSettings = () => {
  const { title, description } = useRenderPageDataByRoute();

  return (
    <BrandSidebarLayout
      headerProps={{
        title,
        description,
      }}
    >
      <Outlet />
    </BrandSidebarLayout>
  );
};
