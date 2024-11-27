import { AppCard } from "@components/Card/AppCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AppCard",
  component: AppCard,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    title: { control: "text" },
    creationDate: { control: "text" },
  },
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "The Incredibly Long and Unnecessarily Verbose Title of a Book That Goes On and On",
    creationDate: "Nov 23, 2024 at 8:12 PM",
    status: "active",
    id: "1",
    authorId: "1",
    lastUpdateDate: "Nov 23, 2024 at 8:12 PM",
    type: "book",
    handleCloneApp: () => {},
    handleDeleteApp: () => {},
  },
};

export const Stack: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ maxWidth: "251px" }}>
        <AppCard {...args} />
      </div>
      <div style={{ maxWidth: "251px" }}>
        <AppCard {...args} />
      </div>
      <div style={{ maxWidth: "251px" }}>
        <AppCard {...args} />
      </div>
    </div>
  ),
  args: {
    title:
      "The Incredibly Long and Unnecessarily Verbose Title of a Book That Goes On and On",
    creationDate: "Nov 23, 2024 at 8:12 PM",
    status: "active",
    id: "1",
    authorId: "1",
    lastUpdateDate: "Nov 23, 2024 at 8:12 PM",
    type: "book",
    handleCloneApp: () => {},
    handleDeleteApp: () => {},
  },
};