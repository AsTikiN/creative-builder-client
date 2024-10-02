import { Dropdown as MuiDropdown } from "@mui/base/Dropdown";
import { Menu, MenuItem, PopoverOrigin, styled } from "@mui/material";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useRef,
} from "react";

export interface DropdownOption {
  id: number;
  label: string;
  value: string;
  icon?: ReactNode;
}

interface DropdownProps extends PropsWithChildren {
  selectedOption: DropdownOption;
  setSelectedOption: Dispatch<SetStateAction<DropdownOption>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dropdownWidth?: number;
  anchorOrigin?: PopoverOrigin;
  options: DropdownOption[];
}

export const Dropdown: FC<DropdownProps> = ({
  children,
  isOpen,
  setIsOpen,
  dropdownWidth,
  anchorOrigin,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <CustomDropdown>
      <div ref={anchorRef}>{children}</div>
      <CustomMenu
        dropdownWidth={dropdownWidth}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
          ...anchorOrigin,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
          ...anchorOrigin,
        }}
      >
        {options.map((option) => (
          <StyledMenuItem
            key={option.id}
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
            }}
            selected={selectedOption.id === option.id}
          >
            {option.icon}
            {option.label}
          </StyledMenuItem>
        ))}
      </CustomMenu>
    </CustomDropdown>
  );
};

const CustomDropdown = styled(MuiDropdown)``;

const CustomMenu = styled(Menu)<{ dropdownWidth?: number }>`
  & .MuiPaper-root {
    width: ${({ dropdownWidth }) => dropdownWidth}px;
    margin-top: 9px;
    color: #000;
    box-shadow:
      0px 0px 0.5px 0px rgba(13, 13, 13, 0.4),
      0px 0px 0px 0.5px rgba(0, 42, 87, 0.06),
      0px 1px 1px -0.5px rgba(13, 13, 13, 0.03),
      0px 2px 2px -1px rgba(13, 13, 13, 0.04),
      0px 3px 3px -1.5px rgba(13, 13, 13, 0.04),
      0px 5px 5px -2.5px rgba(13, 13, 13, 0.03),
      0px 10px 10px -5px rgba(13, 13, 13, 0.03),
      0px 24px 24px -8px rgba(13, 13, 13, 0.03);
  }

  & .MuiList-root {
    padding: 4px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 11px 12px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid transparent;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 34px;

  &:not(:first-child) {
    margin-top: 4px;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  }
`;
