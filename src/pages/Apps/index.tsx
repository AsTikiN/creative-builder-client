import SidebarLayout from "@/layouts/SidebarLayout";
import { BookCard } from "@components/Card/BookCard";
import { styled } from "@mui/material";

export const AppsPage = () => {
  return (
    <SidebarLayout
      headerProps={{
        title: "Apps",
        description: "Create and customize apps for your offers.",
      }}
    >
      <CardsList>
        <BookCard title="The Great Gatsby" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="To Kill a Mockingbird"
          date="Nov 23, 2024 at 8:12 PM"
        />
        <BookCard title="1984" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard title="Pride and Prejudice" date="Nov 23, 2024 at 8:12 PM" />
        <BookCard
          title="The Catcher in the Rye"
          date="Nov 23, 2024 at 8:12 PM"
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
