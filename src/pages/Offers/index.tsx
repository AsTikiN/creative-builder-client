import { styled } from "@mui/material";
import SidebarLayout from "@/layouts/SidebarLayout";
import { OfferCard } from "@components/Card/OfferCard";

export const OffersPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Offers",
        description: "Design compelling offers for your funnels.",
      }}
      buttonProps={{
        children: "New offer",
      }}
    >
      <CardsList>
        <OfferCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Active", status: "success" }}
        />
        <OfferCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Active", status: "success" }}
        />
        <OfferCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Active", status: "success" }}
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
    max-width: 336px;
    flex-basis: calc(33.33% - ${({ theme }) => theme.spacing(5)});
  }
`;
