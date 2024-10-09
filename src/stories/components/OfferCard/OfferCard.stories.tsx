import { OfferCard } from "@components/Card/OfferCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/OfferCard",
  component: OfferCard,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    title: { control: "text" },
    coverImage: { control: "text" },
    date: { control: "text" },
  },
} satisfies Meta<typeof OfferCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "The Incredibly Long and Unnecessarily Verbose Title of a Book That Goes On and On",
    date: "Nov 23, 2024 at 8:12 PM",
  },
};

export const Stack: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ maxWidth: "341px" }}>
        <OfferCard {...args} />
      </div>
      <div style={{ maxWidth: "341px" }}>
        <OfferCard {...args} />
      </div>
      <div style={{ maxWidth: "341px" }}>
        <OfferCard {...args} />
      </div>
    </div>
  ),
  args: {
    title: "Unlock Your Growth: 30-Day Marketing Mastery Program",
    date: "November 23, 2024 at 8:12 PM",
  },
};
