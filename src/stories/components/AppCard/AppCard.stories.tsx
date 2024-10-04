import { AppCard } from "@components/AppCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Application/AppCard",
  component: AppCard,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    title: { control: "text" },
    coverImage: { control: "text" },
    date: { control: "text" },
  },
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "The Incredibly Long and Unnecessarily Verbose Title of a Book That Goes On and On",
    date: "Nov 23, 2024 at 8:12 PM",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1681426414801-f36575c2de9e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXJ8ZW58MHx8MHx8fDA%3D",
  },
};
