import { FileTextIcon } from "@/icons/FileTextIcon";
import { ModalLayout } from "@/layouts/ModalLayout";
import { Accordion } from "@components/Accordion/Accordion";
import { Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Modal",
  component: ModalLayout,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: { control: "boolean" },
    children: { control: "text" },
    handleClose: { action: "closed" },
  },
} satisfies Meta<typeof ModalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <Stack>
        <Accordion title="Chapter" icon={<FileTextIcon />} tabs={[]} />
        <br />
        <Accordion title="Copyright" icon={<FileTextIcon />} tabs={[]} />
        <br />
        <Accordion title="Chapter" icon={<FileTextIcon />} tabs={[]} />
      </Stack>
    ),
    handleClose: () => {},
  },
};
