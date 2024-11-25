import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { HorizontalDots } from "@/icons/HorizontalDots";
import { TrashIcon } from "@/icons/TrashIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { IconButton, styled } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { ContentElement } from "../..";

export const DotsButton = ({
  handleDotsClick,
  handleDotsOptionClick,
  element,
}: {
  handleDotsClick: MouseEventHandler<HTMLButtonElement>;
  handleDotsOptionClick: (
    option: DropdownOption,
    element: ContentElement
  ) => void;
  element: ContentElement;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DotsIconButton
        className="dots-icon"
        onClick={(e) => {
          setIsOpen(!isOpen);
          handleDotsClick(e);
        }}
      >
        <HorizontalDots />
      </DotsIconButton>
      <DropdownAnchor>
        <Dropdown
          dropdownWidth={174}
          options={[
            {
              id: 1,
              label: "Rename",
              value: "rename",
              icon: <EditIcon />,
            },
            {
              id: 2,
              label: "Duplicate",
              value: "duplicate",
              icon: <CopyIcon />,
            },
            {
              id: 3,
              label: "Delete",
              value: "delete",
              color: "error",
              hasDivider: true,
              icon: <TrashIcon />,
            },
          ]}
          isOpen={isOpen}
          selectedOption={null}
          setSelectedOption={(option) => {
            setIsOpen(false);
            if (option)
              handleDotsOptionClick(option as DropdownOption, element);
          }}
          setIsOpen={setIsOpen}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        />
      </DropdownAnchor>
    </>
  );
};

const DropdownAnchor = styled("div")`
  position: absolute;
  top: 10px;
  right: 25px;
`;

const DotsIconButton = styled(IconButton)`
  display: none;
  padding: 4px;
  position: relative;
`;
