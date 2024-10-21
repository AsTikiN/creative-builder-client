import { Box, Grid2, Typography } from "@mui/material";
import HeadingBlock from "@components/HeadingBlock ";

export const Address = () => (
  <Box display="flex" flexWrap="nowrap">
    <Grid2
      container
      direction="column"
      gap={1}
      height="fit-content"
      width="100%"
      maxWidth="370px"
    >
      <HeadingBlock title="Address" />
      <Box>
        <Typography variant="h6" color="grey.200">
          John Doe
        </Typography>
        <Typography variant="h6" color="grey.200">
          123 Main St Apt 4B
        </Typography>
        <Typography variant="h6" color="grey.200">
          Springfield, NY 12345
        </Typography>
        <Typography variant="h6" color="grey.200">
          United States
        </Typography>
      </Box>
    </Grid2>
    <HeadingBlock title="Address" subtitle="Not provided" />
  </Box>
);
