import { Grid2 } from "@mui/material";
import { Divider } from "@components/Divider";
import { Button } from "@components/Button";
import HeadingBlock from "@components/HeadingBlock ";
import Table from "@components/Table";
import { tableBrandBillingColumns } from "@/pages/BrandSettings/pages/BillingPage/static/settings.tsx";
import { mockBrandBillingData } from "@/pages/BrandSettings/pages/BillingPage/static/mock.tsx";
import { CurrentPlan } from "@/pages/BrandSettings/pages/BillingPage/modules/CurrentPlan.tsx";
import { LinkWithArrow } from "@modules/LinkWithArrow";
import { Address } from "@/pages/BrandSettings/pages/BillingPage/modules/Address.tsx";

export const BrandBillingPage = () => {
  return (
    <Grid2 container direction="column" gap={4}>
      <CurrentPlan />
      <Divider />
      <HeadingBlock
        variant="medium"
        title="Billing details"
        subtitle="Manage your billing details here"
      />
      <HeadingBlock
        title="Billing email"
        subtitle="muratalpaydesign@gmail.com"
      />
      <Address />
      <Grid2 container direction="column" gap={2}>
        <HeadingBlock title="Company name" subtitle="Fumez Design Studio" />
        <LinkWithArrow title="Update billing details" link="#" />
      </Grid2>
      <Divider />
      <HeadingBlock
        variant="medium"
        title="Payment methods"
        subtitle="No card registered to your account"
      />
      <Button variant="outlined" s>
        Add payment method
      </Button>
      <Divider />
      <HeadingBlock
        variant="medium"
        title="Billing history"
        subtitle="View and track your past invoices and payment history"
      />
      <Table
        rows={mockBrandBillingData}
        columns={tableBrandBillingColumns()}
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
