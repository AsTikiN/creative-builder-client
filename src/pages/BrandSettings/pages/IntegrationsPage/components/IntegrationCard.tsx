import { FigmaIcon } from "@/icons/FigmaIcon";
import { ShareIntegrationIcon } from "@/icons/ShareIntegrationIcon";
import { Button } from "@components/Button";
import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  onSettingsClick: () => void;
}

export const IntegrationCard: FC<Props> = ({ onSettingsClick }) => {
  return (
    <Wrapper>
      <TopSection>
        <Icon>
          <FigmaIcon />
        </Icon>
        <IconButton sx={{ padding: 0 }}>
          <ShareIntegrationIcon />
        </IconButton>
      </TopSection>

      <Info>
        <Typography color="grey.400" variant="body1">
          Figma
        </Typography>
        <Typography color="grey.200" variant="body2">
          Seamless collaboration and document management.
        </Typography>
      </Info>

      <Actions>
        <Button fullWidth variant="outlined" onClick={onSettingsClick}>
          Settings
        </Button>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px #0a0d1408;
`;

const TopSection = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3, 3, 2, 3)};
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

const Info = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(0, 3)};
`;

const Actions = styled(Box)`
  border-top: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(3)};
`;
