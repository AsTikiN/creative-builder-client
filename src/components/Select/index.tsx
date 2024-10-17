import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { alpha, PopoverOrigin, styled } from "@mui/material";
import { SmallChevronIconDown } from "@/icons/SmallChevronIconDown"; // Assuming you have this custom icon

const ChevronIcon = () => {
  return (
    <ChevronWrapper>
      <SmallChevronIconDown />
    </ChevronWrapper>
  );
};

export interface SelectOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface BasicSelectProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  options: SelectOption[];
  dropdownWidth?: number;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

const DEFAULT_DROPDOWN_WIDTH = 175;

export const BasicSelect: FC<BasicSelectProps> = ({
  open,
  setIsOpen,
  options,
  dropdownWidth,
  anchorOrigin,
  transformOrigin,
}) => {
  const [mode, setMode] = useState(options[0]?.value || "");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setMode(event.target.value as string);
  };

  return (
    <Wrapper>
      <FormControl fullWidth>
        <StyledSelect
          open={open}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          id="demo-simple-select"
          value={mode}
          onChange={handleChange}
          IconComponent={ChevronIcon}
          MenuProps={{
            MenuListProps: {
              sx: {
                padding: "4px",
              },
            },
            PaperProps: {
              style: {
                boxSizing: "border-box",
                width: dropdownWidth || DEFAULT_DROPDOWN_WIDTH,
                marginTop: "9px",
                color: "#000",
                border: "0.5px solid #E0E0E0",
                boxShadow: `
                  0px 0px 0.5px 0px rgba(13, 13, 13, 0.40),
                  0px 0px 0px 0.5px rgba(0, 42, 87, 0.06),
                  0px 1px 1px -0.5px rgba(13, 13, 13, 0.03),
                  0px 2px 2px -1px rgba(13, 13, 13, 0.04),
                  0px 3px 3px -1.5px rgba(13, 13, 13, 0.04),
                  0px 5px 5px -2.5px rgba(13, 13, 13, 0.03),
                  0px 10px 10px -5px rgba(13, 13, 13, 0.03),
                  0px 24px 24px -8px rgba(13, 13, 13, 0.03)
                `,
                boxSizing: "border-box",
              },
            },
            anchorOrigin: anchorOrigin || {
              vertical: "bottom",
              horizontal: "right",
            },
            transformOrigin: transformOrigin || {
              vertical: "top",
              horizontal: "right",
            },
          }}
        >
          {options.map((option) => (
            <StyledMenuItem key={option.value} value={option.value}>
              {option.icon}
              {option.label}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  /* width: 300px; */
`;

const StyledSelect = styled(Select)`
  padding: 0;
  color: ${({ theme }) => theme.palette.grey[200]};
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};

  &:hover .MuiSelect-select {
    /* border: 0.5px solid ${({ theme }) =>
      alpha(theme.palette.grey[200], 0.2)}; */
  }

  .MuiSelect-select {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    padding-right: 6px !important;
    height: 32px;
    box-sizing: border-box;

    &:hover {
      /* border: 0.5px solid ${({ theme }) =>
        alpha(theme.palette.grey[200], 0.2)}; */
    }

    svg {
      display: none;
    }
  }

  fieldset {
    border: none;
  }

  /* svg {
    display: none;
  } */
`;

const ChevronWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 6px;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 11px 12px;
  background-color: #fff;
  height: 34px;
  border: 0.5px solid transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:not(:first-child) {
    margin-top: 4px;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  }
`;
