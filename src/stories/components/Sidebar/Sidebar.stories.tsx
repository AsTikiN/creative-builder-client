import type { Meta, StoryObj } from "@storybook/react";
import { SidebarStory } from "./SidebarStory";

const meta = {
  title: "Components/Sidebar",
  component: SidebarStory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
