import { Dropdown as MuiDropdown } from "@mui/base/Dropdown";
import {
  css,
  Menu,
  MenuItem,
  PopoverOrigin,
  Stack,
  styled,
  Typography,
} from "@mui/material";
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
  color?: string;
  hasDivider?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends PropsWithChildren {
  selectedOption: DropdownOption | null;
  setSelectedOption: Dispatch<SetStateAction<DropdownOption | null>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dropdownWidth?: number;
  anchorOrigin?: PopoverOrigin;
  options: DropdownOption[];
  topSection?: ReactNode;
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
  topSection,
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
        {topSection && <TopSection>{topSection}</TopSection>}
        {options.map((option) => (
          <StyledMenuItem
            key={option.id}
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
              option.onClick?.();
            }}
            selected={selectedOption?.id === option.id}
            divider={option.hasDivider}
          >
            {option.icon}
            <Typography color={`${option.color || "grey.400"}`} variant="h5">
              {option.label}
            </Typography>
          </StyledMenuItem>
        ))}
      </CustomMenu>
    </CustomDropdown>
  );
};

const CustomDropdown = styled(MuiDropdown)`
  border-radius: 30px;
`;

const CustomMenu = styled(Menu)<{ dropdownWidth?: number }>`
  & .MuiPaper-root {
    border-radius: 10px;
    width: ${({ dropdownWidth }) => dropdownWidth}px;
    margin-top: ${({ theme }) => theme.spacing(2.25)};
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
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const StyledMenuItem = styled(MenuItem)<{ divider?: boolean }>`
  padding: ${({ theme }) => theme.spacing(1.75, 2)};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid transparent;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 34px;
  position: relative;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  ${({ divider, theme }) =>
    divider &&
    css`
      margin-top: ${theme.spacing(2.875)} !important;

      &:before {
        content: "";
        position: absolute;
        top: -5.5px;
        left: -1px;
        width: calc(100% + 2px);
        height: 0.5px;
        background-color: ${theme.palette.grey[100]};
    `}

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  }
`;

const TopSection = styled(Stack)`
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  padding: ${({ theme }) => theme.spacing(1)};
`;
