import SidebarLayout from "@/layouts/SidebarLayout";
import { FunnelCard } from "@components/Card/FunnelCard";
import { styled } from "@mui/material";

export const FunnelsPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Funnels",
        description: "Build and manage your sales funnels with ease.",
        buttonText: "New funnel",
      }}
    >
      <CardsList>
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Book a Call", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Book a Call", status: "success" }}
        />
        <FunnelCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Book a Call", status: "success" }}
        />
      </CardsList>
    </SidebarLayout>
  );
};

const CardsList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: ${({ theme }) => theme.spacing(5)};

  & > * {
    flex-basis: calc(50% - ${({ theme }) => theme.spacing(2.5)});
  }
`;
