import type { Meta, StoryObj } from "@storybook/react";
import { SidebarStory } from "./SidebarStory";

const meta = {
  title: "Components/BrandSidebar",
  component: SidebarStory,
  parameters: {
    layout: "centered",
  },

} satisfies Meta<typeof SidebarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
