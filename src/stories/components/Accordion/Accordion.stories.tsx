import { Accordion } from "@/components/Accordion/Accordion";
import { FileTextIcon } from "@/icons/FileTextIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    icon: { control: "object" },
    disabled: { control: "boolean" },
    isFilledIcon: { control: "boolean" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Chapter",
    icon: <FileTextIcon />,
    tabs: [],
  },
};

export const Disabled: Story = {
  args: {
    title: "Copyright",
    icon: <FileTextIcon />,
    tabs: [],
    disabled: true,
    isFilledIcon: true,
  },
};
