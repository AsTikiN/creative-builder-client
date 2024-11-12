import { Divider } from "@components/Divider/Divider";
import { Input } from "@components/Input";
import { Box, Stack, styled, Typography } from "@mui/material";
import { Upload } from "../components/Upload";
import { TextedDivider } from "@components/Divider/TextedDivider";

export const FigmaSidebarContent = () => {
  return (
    <>
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
          Create a private key under Service Accounts in Figma cloud and upload.
        </Typography>
      </TextWrapper>
      <Stack spacing={4}>
        <Upload />
        <TextedDivider>OR</TextedDivider>
        <Input placeholder="Paste private key here..." />
      </Stack>
    </>
  );
};

const DividerWrapper = styled(Box)`
  margin: 17.5px 0;
`;

const TextWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
