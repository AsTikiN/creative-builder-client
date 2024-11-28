import { Stack, styled } from "@mui/material";
import SidebarLayout from "@/layouts/SidebarLayout";
import { AppCard } from "@components/Card/AppCard";
import {
  useCloneAppMutation,
  useCreateAppMutation,
  useDeleteAppMutation,
  useGetAppsQuery,
} from "@store/api/baseApi";
import { Skeleton } from "@components/Skeleton";
import { useNavigate } from "react-router-dom";
import { routes } from "@config/routes";
import { useDisplayDensity } from "@/hooks/useDisplayDensity";

export const AppsPage = () => {
  const navigate = useNavigate();

  const { displayDensity, setDisplayDensity, ordering } = useDisplayDensity();

  const [createApp, { isLoading: createAppLoading }] = useCreateAppMutation();
  const [cloneApp] = useCloneAppMutation();
  const [deleteApp] = useDeleteAppMutation();

  const { data: apps, isLoading: appsLoading } = useGetAppsQuery({
    ordering: ordering || "recentActivity",
  });

  const handleCreateApp = async () => {
    const result = await createApp({
      createAppDto: {
        title: "New app",
        status: "active",
        type: "book",
      },
    });

    const id = result?.data?.id;

    if (id) {
      navigate(routes.editBook(id));
    }
  };

  const handleAppClick = (id: string) => () => {
    navigate(routes.editBook(id));
  };

  const handleCloneApp = (id: string) => () => {
    cloneApp({ id });
  };

  const handleDeleteApp = (id: string) => () => {
    deleteApp({ id });
  };

  return (
    <SidebarLayout
      headerProps={{
        title: "Apps",
        description: "Create and customize apps for your offers.",
      }}
      displayDensity={displayDensity}
      setDisplayDensity={setDisplayDensity}
      buttonProps={{
        onClick: handleCreateApp,
        children: "New app",
        disabled: createAppLoading,
      }}
    >
      <CardsList>
        {appsLoading && (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <Stack key={index} gap={2} width="calc(25% - 15px)">
                <Skeleton variant="rectangular" height={240} width="100%" />
                <Skeleton variant="rectangular" height={20} width="50%" />
                <Skeleton variant="rectangular" height={20} width="60%" />
              </Stack>
            ))}
          </>
        )}
        {!appsLoading &&
          apps?.map((app) => (
            <AppCard
              key={app.id}
              {...app}
              statusChipProps={{ label: "Lead App", status: "success" }}
              onClick={handleAppClick(app.id)}
              handleCloneApp={handleCloneApp(app.id)}
              handleDeleteApp={handleDeleteApp(app.id)}
            />
          ))}
      </CardsList>
    </SidebarLayout>
  );
};

const CardsList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100vh - 72.5px);
  overflow-y: auto;

  gap: ${({ theme }) => theme.spacing(3)};

  & > * {
    max-width: 240px;
    width: 100%;
    flex-basis: calc(25% - ${({ theme }) => theme.spacing(5)});
  }
`;
