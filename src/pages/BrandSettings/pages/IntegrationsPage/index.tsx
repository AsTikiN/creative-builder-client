import { Input } from "@components/Input";
import {
  Box,
  Drawer,
  Stack,
  styled,
  Typography,
  Divider as MuiDivider,
} from "@mui/material";
import { IntegrationCard } from "./components/IntegrationCard";
import { SearchIcon } from "@/icons/SearchIcon";
import { useState } from "react";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { Divider } from "@components/Divider";
import { Upload } from "./components/Upload";

export const IntegrationsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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
      </Actions>
      <IntegrationCards>
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
        <IntegrationCard onSettingsClick={handleDrawerOpen} />
      </IntegrationCards>
      <StyledDrawer
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        anchor="right"
      >
        <Icon>
          <FigmaIcon />
        </Icon>
        <TextWrapper>
          <Typography variant="body1" color="grey.400">
            Figma
          </Typography>
          <Typography variant="body2" color="grey.200">
            Seamless collaboration and document management.
          </Typography>
        </TextWrapper>

        <Input
          label="Measurement ID"
          required
          placeholder="Enter your Figma token"
        />

        <DividerWrapper>
          <Divider />
        </DividerWrapper>

        <TextWrapper>
          <Typography variant="body1" color="grey.400">
            Figma optimize
          </Typography>
          <Typography variant="body2" color="grey.200">
            Seamless collaboration and document management.
          </Typography>
        </TextWrapper>

        <Input
          label="Container ID"
          required
          placeholder="Enter your Figma token"
        />

        <Typography variant="body2" color="grey.200" mt={2}>
          Start running A/B, multivariate, and more tests on your pages with
          Google Optimize. You'll need to have Figma enabled.
        </Typography>

        <DividerWrapper>
          <Divider />
        </DividerWrapper>

        <TextWrapper>
          <Typography variant="body1" color="grey.400">
            Private key (JSON)
          </Typography>
          <Typography variant="body2" color="grey.200">
            Create a private key under Service Accounts in Figma cloud and
            upload.
          </Typography>
        </TextWrapper>
        <Upload />
        <TextedDivider>OR</TextedDivider>
      </StyledDrawer>
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
    flex-basis: calc(25% - ${({ theme }) => theme.spacing(4)});
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 322px;
    right: 16px;
    height: calc(100vh - 32px);
    top: 16px;
    border-radius: 10px;
    padding: ${({ theme }) => theme.spacing(4)};
    box-shadow:
      0px 24px 24px -8px #0d0d0d08,
      0px 10px 10px -5px #0d0d0d08,
      0px 5px 5px -2.5px #0d0d0d08,
      0px 3px 3px -1.5px #0d0d0d0a,
      0px 2px 2px -1px #0d0d0d0a,
      0px 1px 1px -0.5px #0d0d0d08,
      0px 0px 0px 0.5px #002a570f,
      0px 0px 0.5px 0px #0d0d0d66;
  }
`;

const Icon = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  box-shadow: 0px 1px 2px 0px #0a0d1408;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  svg {
    width: 24px;
    height: 24px;
  }
`;

const TextWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const DividerWrapper = styled(Box)`
  margin: 17.5px 0;
`;

const TextedDivider = styled(MuiDivider)`
  ${({ theme }) => theme.typography.subtitle1}
  color: ${({ theme }) => theme.palette.grey[50]};

  &:before {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }

  &:after {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
