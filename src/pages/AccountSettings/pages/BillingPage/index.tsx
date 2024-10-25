import { Box, Grid2, Stack, Typography } from "@mui/material";
import { Divider } from "@components/Divider/Divider";
import { tableAccountBillingColumns } from "@/pages/AccountSettings/pages/BillingPage/static/settings.tsx";
import { mockAccountBillingData } from "@/pages/AccountSettings/pages/BillingPage/static/mock.tsx";
import { Button } from "@components/Button";
import HeadingBlock from "@components/HeadingBlock ";
import Table from "@components/Table";
import { LinkWithArrow } from "@modules/LinkWithArrow";

export const AccountBillingPage = () => {
  return (
    <Grid2 container direction="column" spacing={4}>
      <HeadingBlock
        variant="medium"
        title="Billing details"
        subtitle="Manage your billing details here"
      />
      <HeadingBlock
        title="Billing email"
        subtitle="muratalpaydesign@gmail.com"
      />
      <Grid2 container direction="column" gap={1}>
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
      <Grid2 container direction="column" gap={2}>
        <HeadingBlock title="Full name" subtitle="Murat Alpay" />
        <LinkWithArrow title="Update billing details" link="#" />
      </Grid2>
      <Divider />
      <HeadingBlock
        variant="medium"
        title="Payment methods"
        subtitle="No card registered to your account"
      />
      <Stack alignItems="flex-start">
        <Button variant="outlined">Add payment method</Button>
      </Stack>
      <Divider />
      <HeadingBlock
        variant="medium"
        title="Billing history"
        subtitle="View and track your past invoices and payment history"
      />
      <Table
        rows={mockAccountBillingData}
        columns={tableAccountBillingColumns()}
        sx={{ border: 0, borderRadius: 0, width: "fit-content" }}
        columnHeaderHeight={30}
        rowHeight={30}
        hideFooter
        disableAutosize
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableColumnSorting
      />
    </Grid2>
  );
};
