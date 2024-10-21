import { ToggleButton } from "@components/ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};
