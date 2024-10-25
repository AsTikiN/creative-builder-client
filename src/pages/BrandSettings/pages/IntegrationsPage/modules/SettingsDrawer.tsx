import { FigmaIcon } from "@/icons/FigmaIcon";
import { TextedDivider } from "@components/Divider/TextedDivider";
import { Input } from "@components/Input";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Upload } from "../components/Upload";
import { Divider } from "@components/Divider/Divider";
import { FC } from "react";
import { Button } from "@components/Button";
import { RescueIcon } from "@/icons/RescueIcon";
import { CrossIcon } from "@/icons/CrossIcon";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const SettingsDrawer: FC<Props> = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <StyledDrawer
      onClose={() => setIsDrawerOpen(false)}
      open={isDrawerOpen}
      anchor="right"
    >
      <TopSection>
        <Icon>
          <FigmaIcon />
        </Icon>
        <CloseIconButton onClick={handleClose}>
          <CrossIcon />
        </CloseIconButton>
      </TopSection>

      <Content>
        <TextWrapper>
          <Typography variant="body1" color="grey.400">
            Figma
          </Typography>
          <Typography variant="body2" color="grey.200">
            Seamless collaboration and document management.
          </Typography>
        </TextWrapper>

        <Input label="Measurement ID" required placeholder="G-OPD2NX5E3C" />

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

        <Input label="Container ID" required placeholder="GTM-A1B2CD" />

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
        <Stack spacing={4}>
          <Upload />
          <TextedDivider>OR</TextedDivider>
          <Input placeholder="Paste private key here..." />
        </Stack>
      </Content>

      <Actions>
        <RescueIcon />

        <ButtonsWrapper>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Save
          </Button>
        </ButtonsWrapper>
      </Actions>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    max-width: 332px;
    right: 16px;
    height: calc(100vh - 32px);
    top: 16px;
    border-radius: 10px;
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

const TopSection = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Content = styled(Stack)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const Actions = styled(Stack)`
  padding: ${({ theme }) => theme.spacing(4)};

  border-top: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled(Stack)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const CloseIconButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  padding: 0;

  svg {
    width: 20px;
    height: 20px;

    path {
      stroke: ${({ theme }) => theme.palette.grey[50]};
    }
  }
`;
