import SidebarLayout from "@/layouts/SidebarLayout";
import { OfferCard } from "@components/Card/OfferCard";
import { styled } from "@mui/material";

export const OffersPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Offers",
        description: "Design compelling offers for your funnels.",
      }}
    >
      <CardsList>
        <OfferCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <OfferCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <OfferCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <OfferCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
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
    flex-basis: calc(33.33% - ${({ theme }) => theme.spacing(5)});
  }
`;
