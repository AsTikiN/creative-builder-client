import SidebarLayout from "@/layouts/SidebarLayout";
import { AppCard } from "@components/Card/AppCard";
import { styled } from "@mui/material";

export const AppsPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Apps",
        description: "Create and customize apps for your offers.",
        buttonText: "New app",
      }}
    >
      <CardsList>
        <AppCard
          title="The Great Gatsby"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Active", status: "success" }}
        />
        <AppCard
          title="To Kill a Mockingbird"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Book", status: "success" }}
        />
        <AppCard
          title="1984"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Book", status: "success" }}
        />
        <AppCard
          title="Pride and Prejudice"
          date="Nov 23, 2024 at 8:12 PM"
          statusChipProps={{ label: "Active", status: "success" }}
        />
        <AppCard
          title="The Catcher in the Rye"
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

  gap: ${({ theme }) => theme.spacing(5)};

  & > * {
    flex-basis: calc(25% - ${({ theme }) => theme.spacing(5)});
  }
`;
