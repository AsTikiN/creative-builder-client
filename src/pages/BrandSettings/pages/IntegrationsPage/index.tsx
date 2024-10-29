import { Input } from "@components/Input";
import { Stack, styled, Typography } from "@mui/material";
import { IntegrationCard } from "./components/IntegrationCard";
import { SearchIcon } from "@/icons/SearchIcon";
import { ReactNode, useState } from "react";
import { SettingsDrawer } from "./modules/SettingsDrawer";
import { FilterTimelineIcon } from "@/icons/FilterTimelineIcon";
import { OpenAiLogoIcon } from "@/icons/OpenAiLogoIcon";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { MultipleSelect } from "@components/MultipleSelect";

interface DrawerData {
  icon: ReactNode;
  title: string;
  description: string;
  renderComponent?: ReactNode;
}

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
        {/* <Select
          label={
            <SortWrapper>
              <FilterTimelineIcon />
              <Typography variant="body1" color="grey.200">
                Sort by
              </Typography>
            </SortWrapper>
          }
          open={false}
          setIsOpen={() => {
            setIsSortByOpen(!isSortByOpen);
          }}
          options={[]}
        /> */}
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
      {/* TODO: Move into separate array */}
      <IntegrationCards>
        <IntegrationCard
          icon={<OpenAiLogoIcon />}
          title="OpenAI"
          description="Connect your own AI models our platform to power agents and generate content."
          href="https://platform.openai.com/settings/api-keys"
          onSettingsClick={() => {
            handleDrawerOpen();
            setDrawerData({
              icon: <OpenAiLogoIcon />,
              title: "OpenAI",
              description:
                "Connect your own AI models our platform to power agents and generate content.",
              renderComponent: (
                <Input label="API Key" placeholder="sk-proj-..." />
              ),
            });
          }}
        />
        <IntegrationCard
          icon={<FigmaIcon />}
          title="Figma"
          description="Seamless collaboration and document management."
          href="https://www.figma.com/settings"
          onSettingsClick={() => {
            handleDrawerOpen();
            setDrawerData({
              icon: <FigmaIcon />,
              title: "Figma",
              description: "Seamless collaboration and document management.",
            });
          }}
        />
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
