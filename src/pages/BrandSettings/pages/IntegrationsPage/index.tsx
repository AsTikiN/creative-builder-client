import { Input } from "@components/Input";
import { Stack, styled, Typography } from "@mui/material";
import { IntegrationCard } from "./components/IntegrationCard";
import { SearchIcon } from "@/icons/SearchIcon";
import { useState } from "react";
import { SettingsDrawer } from "./modules/SettingsDrawer";
import { Select } from "@components/Select";
import { FilterTimelineIcon } from "@/icons/FilterTimelineIcon";

export const IntegrationsPage = () => {
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
        <Select
          label={
            <SortWrapper>
              <FilterTimelineIcon />
              <Typography variant="body1" color="grey.200">
                Sort by
              </Typography>
            </SortWrapper>
          }
          open={false}
          setIsOpen={() => {}}
          options={[]}
        />
      </Actions>
      <IntegrationCards>
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
      </IntegrationCards>

      <SettingsDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
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
