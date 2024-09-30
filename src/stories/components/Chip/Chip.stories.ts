import { StatusChip } from "@components/StatusChip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Chip",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
