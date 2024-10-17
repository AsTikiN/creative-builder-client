import { Input } from "@components/Input";
import { Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "With icon input",
    startIcon: (
      <Typography variant="label" color="grey.200">
        booklab.ai/
      </Typography>
    ),
  },
};

export const WithValue: Story = {
  args: {
    value: "Sample text",
  },
};
