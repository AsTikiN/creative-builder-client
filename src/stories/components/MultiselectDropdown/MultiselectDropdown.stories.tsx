import { LayoutTopIcon } from "@/icons/LayoutTopIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { MultipleSelect } from "@components/MultipleSelect";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Components/MultiselectDropdown",
  component: MultipleSelect,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    open: { control: "boolean" },
    setIsOpen: { action: "setIsOpen" },
    options: { control: "object" },
    dropdownWidth: { control: "number" },
  },
} satisfies Meta<typeof MultipleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setIsOpen] = useState(args.open);

    return <MultipleSelect {...args} open={open} setIsOpen={setIsOpen} />;
  },
  args: {
    options: [
      {
        value: "Display density",
        label: "Display density",
        type: "title",
      },
      { value: "Compact", label: "Compact", icon: <MenuIcon /> },
      {
        value: "Comfortable",
        label: "Comfortable",
        icon: <LayoutTopIcon />,
      },
      { value: "", label: "", type: "divider" },
      { value: "Ordering", label: "Ordering", type: "title" },
      { value: "Recent activity", label: "Recent activity" },
      { value: "Created", label: "Created" },
    ],
    dropdownWidth: 200,
    open: false,
    setIsOpen: () => {},
    value: [],
    setValue: () => {},
  },
};
