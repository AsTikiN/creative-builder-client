import { StatusChip } from "@components/StatusChip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Badge",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: { control: "text" },
    status: {
      control: { type: "select" },
      options: ["success", "error"],
    },
  },
} satisfies Meta<typeof StatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    label: "Success",
    status: "success",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    status: "error",
  },
};
