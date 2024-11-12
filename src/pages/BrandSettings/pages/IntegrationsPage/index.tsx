import { Input } from "@components/Input";
import { Stack, styled, Typography } from "@mui/material";
import { IntegrationCard } from "./components/IntegrationCard";
import { SearchIcon } from "@/icons/SearchIcon";
import { useState } from "react";
import { SettingsDrawer, SettingsDrawerProps } from "./modules/SettingsDrawer";
import { FilterTimelineIcon } from "@/icons/FilterTimelineIcon";
import { MultipleSelect } from "@components/MultipleSelect";
import { integrationsData } from "./mock/integrationData";

export type DrawerData = Pick<
  SettingsDrawerProps,
  "icon" | "title" | "description" | "renderComponent"
>;

export const IntegrationsPage = () => {
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Actions>
        <Input
          slotProps={{
            input: {
              startAdornment: <SearchIcon />,
            },
          }}
          placeholder="Search"
        />

        <MultipleSelect
          label={
            <SortWrapper>
              <FilterTimelineIcon />
              <Typography variant="body1" color="grey.200">
                Sort by
              </Typography>
            </SortWrapper>
          }
          open={isSortByOpen}
          setIsOpen={() => {
            setIsSortByOpen(!isSortByOpen);
          }}
          options={[
            {
              label: "Active",
              value: "Active",
            },
            {
              label: "Inactive",
              value: "Inactive",
            },
          ]}
        />
      </Actions>

      <IntegrationCards>
        {integrationsData.map((integration) => (
          <IntegrationCard
            key={integration.title}
            {...integration}
            onSettingsClick={integration.onSettingsClick(
              handleDrawerOpen,
              setDrawerData
            )}
          />
        ))}
      </IntegrationCards>

      {drawerData && (
        <SettingsDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          {...drawerData}
        />
      )}
    </>
  );
};

const Actions = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
`;

const IntegrationCards = styled(Stack)`
  margin-top: ${({ theme }) => theme.spacing(4)};
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;

  & > * {
    max-width: 269px;
    flex: 1;
    flex-basis: calc(25% - ${({ theme }) => theme.spacing(4)});
  }
`;

const SortWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};

  svg {
    display: block !important;
  }
`;
