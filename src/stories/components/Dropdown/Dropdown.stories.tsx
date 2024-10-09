import { Button } from "@components/Button";
import { Dropdown } from "@components/Dropdown";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    selectedOption: { control: "object" },
    dropdownWidth: { control: "number" },
    options: { control: "object" },
    setIsOpen: { action: "setIsOpen" },
    anchorOrigin: { control: "object" },
    isOpen: { control: "boolean" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState(args.selectedOption);
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <Button variant="outlined" onClick={() => setIsOpen(!isOpen)}>
          Click me
        </Button>

        <Dropdown
          {...args}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </>
    );
  },
  args: {
    options: [
      { id: 1, value: "option1", label: "Option 1" },
      { id: 2, value: "option2", label: "Option 2" },
      { id: 3, value: "option3", label: "Option 3" },
    ],
    selectedOption: { id: 1, value: "option1", label: "Option 1" },
    dropdownWidth: 200,
    setIsOpen: () => {},
    setSelectedOption: () => {},
    anchorOrigin: { vertical: "top", horizontal: "left" },
    isOpen: false,
  },
};
