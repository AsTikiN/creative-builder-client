import { Box, Grid2, Typography } from "@mui/material";
import HeadingBlock from "@components/HeadingBlock ";
import Chip from "@components/Chip";
import { LinkWithArrow } from "@modules/LinkWithArrow";

export const CurrentPlan = () => {
  return (
    // TODO - need fix height
    <Box display="flex" flexDirection="column" gap={4} height="120px">
      <HeadingBlock
        variant="medium"
        title="Current plan"
        subtitle="You can see information about your current plan here"
      />
      <Box display="flex" height="fit-content" flexWrap="nowrap">
        <Grid2
          container
          direction="column"
          gap={1}
          width="100%"
          maxWidth="370px"
          height="fit-content"
        >
          <Grid2
            container
            alignItems="center"
            justifyContent="center"
            width="fit-content"
            gap={1}
          >
            <HeadingBlock title="Plan" />
            <Chip label="MONTHLY" customVariant="primary" customRadius="sm" />;
          </Grid2>
          <Grid2 container alignItems="center" mb="4px">
            <Typography variant="h6" color="grey.400">
              Basic plan $19 per month
            </Typography>
            <Typography variant="h6" color="grey.200">
              , billed monthly
            </Typography>
          </Grid2>
          <LinkWithArrow title="View plans and upgrade" link="#" />
        </Grid2>

        <Grid2
          container
          height="fit-content"
          direction="column"
          gap={1}
          pt="2px"
        >
          <HeadingBlock title="Billing period" />
          <Grid2 container alignItems="center" gap={1}>
            <Typography variant="h6" color="grey.400">
              Monthly{" "}
            </Typography>
            <Typography variant="h6" color="grey.200">
              (starts October 2nd, 2024)
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
