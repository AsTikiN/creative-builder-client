import { ShieldCheckIcon } from "@/icons/ShieldCheckIcon";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider/Divider";
import { Box, Stack, Typography } from "@mui/material";

export const SecurityPage = () => {
  return (
    <>
      <Stack gap={1}>
        <Typography color="grey.400" variant="h5">
          Two-factor authentication
        </Typography>
        <Typography maxWidth={342} variant="body2" color="grey.200">
          Secure your account with two-factor authentication to add an
          additional layer of security when logging in
        </Typography>
      </Stack>

      <Box mt={4} mb={4}>
        <Button variant="outlined" startIcon={<ShieldCheckIcon />}>
          Start setup
        </Button>
      </Box>

      <Divider />
    </>
  );
};
