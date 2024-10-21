import { PlanCard } from "@/pages/BrandSettings/pages/PlansPage/components/PlanCard";
import { Stack, styled } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Plans",
  component: PlanCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PlansList>
      <PlanCard {...args} />
      <PlanCard
        title="Business"
        price="79"
        description="per month, billed monthly"
        benefits={[
          {
            id: "1",
            title: "1.5% transaction fee",
          },
          {
            id: "2",
            title: "10 team members",
          },
          {
            id: "3",
            title: "100 apps",
          },
          {
            id: "4",
            title: "50 offers",
          },
          {
            id: "5",
            title: "20 funnels",
          },
        ]}
      />
      <PlanCard
        title="Enterprise"
        price="149"
        description="per month, billed monthly"
        benefits={[
          {
            id: "1",
            title: "0% transaction fee",
          },
          {
            id: "2",
            title: "Unlimited team members",
          },
          {
            id: "3",
            title: "Unlimited apps",
          },
          {
            id: "4",
            title: "Unlimited offers",
          },
          {
            id: "5",
            title: "Unlimited funnels",
          },
        ]}
      />
    </PlansList>
  ),
  args: {
    title: "Side Hustle",
    price: "29",
    description: "per month, billed monthly",
    isActive: true,
    benefits: [
      {
        id: "1",
        title: "3% transaction fee",
      },
      {
        id: "2",
        title: "2 team members",
      },
      {
        id: "3",
        title: "20 apps",
      },
      {
        id: "4",
        title: "10 offers",
      },
      {
        id: "5",
        title: "4 funnels",
      },
    ],
  },
};

const PlansList = styled(Stack)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)};
  max-width: 616px;
`;
