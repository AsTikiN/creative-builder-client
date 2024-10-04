import { Button } from "@components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined"],
    },
    startIcon: {
      control: { type: "text" },
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: "Contained",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
};

export const ContainedWithStartIcon: Story = {
  args: {
    children: "Icon",
    variant: "contained",
    startIcon: "🚀",
  },
};
