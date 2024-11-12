import SidebarLayout from "@/layouts/SidebarLayout";
import { FunnelCard } from "@components/Card/FunnelCard";
import { styled } from "@mui/material";

export const FunnelsPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Funnels",
        description: "Build and manage your sales funnels with ease.",
      }}
      buttonText="New funnel"
    >
      <CardsList>
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />

        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Lead Funnel", status: "success" }}
        />
      </CardsList>
    </SidebarLayout>
  );
};

const CardsList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100vh - 72.5px);
  overflow-y: auto;

  gap: ${({ theme }) => theme.spacing(3)};

  & > * {
    max-width: 520px;
    flex-basis: calc(50% - ${({ theme }) => theme.spacing(2.5)});
  }
`;
