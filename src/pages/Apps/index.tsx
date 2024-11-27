import { Stack, styled } from "@mui/material";
import SidebarLayout from "@/layouts/SidebarLayout";
import { AppCard } from "@components/Card/AppCard";
import { useCreateAppMutation, useGetAppsQuery } from "@store/api/baseApi";
import { Skeleton } from "@components/Skeleton";
import { useNavigate } from "react-router-dom";
import { routes } from "@config/routes";

export const AppsPage = () => {
  const navigate = useNavigate();

  const { data: apps, isLoading: appsLoading } = useGetAppsQuery();
  const [createApp, { isLoading: createAppLoading }] = useCreateAppMutation();

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

  return (
    <SidebarLayout
      headerProps={{
        title: "Apps",
        description: "Create and customize apps for your offers.",
      }}
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
              title={app.title}
              date="Nov 23, 2024 at 8:12 PM"
              statusChipProps={{ label: "Lead App", status: "success" }}
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
