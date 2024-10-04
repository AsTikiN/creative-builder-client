import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { alpha, OutlinedInput, Stack, styled, Typography } from "@mui/material";
import { SmallChevronIconDown } from "@/icons/SmallChevronIconDown"; // Assuming you have this custom icon
import { CheckIcon } from "@/icons/CheckIcon";

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
  type?: "title" | "divider";
}

interface BasicSelectProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  options: SelectOption[];
  dropdownWidth?: number;
}

const DEFAULT_DROPDOWN_WIDTH = 200;

export const MultipleSelect: FC<BasicSelectProps> = ({
  open,
  setIsOpen,
  options,
  dropdownWidth,
}) => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const getComponentByType = (option: SelectOption) => {
    switch (option.type) {
      case "title":
        return <MenuTitle variant="h6">{option.label}</MenuTitle>;
      case "divider":
        return <MenuDivider />;
    }
  };

  return (
    <Wrapper>
      <FormControl fullWidth>
        <Label variant="h5" color="grey.200">
          Display
        </Label>
        <StyledSelect
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          IconComponent={ChevronIcon}
          MenuProps={{
            MenuListProps: {
              sx: {
                padding: "4px",
              },
            },
            PaperProps: {
              style: {
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
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          }}
        >
          {options.map((option) =>
            option.type ? (
              <div key={option.value}>{getComponentByType(option)}</div>
            ) : (
              <StyledMenuItem key={option.value} value={option.value}>
                {option.icon}
                {option.label}
                <CheckIconWrapper className="check-icon">
                  <CheckIcon />
                </CheckIconWrapper>
              </StyledMenuItem>
            )
          )}
        </StyledSelect>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 101px;
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
    color: transparent;

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
  padding: 7px 8px;
  background-color: #fff;
  height: 34px;
  border: 0.5px solid transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  display: flex;
  align-items: center;
  gap: 8px;

  &.Mui-selected {
    background-color: transparent;
    .check-icon {
      display: flex;
    }
  }

  &:not(:first-child) {
    margin-top: 4px;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  }
`;

const MenuTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[50]};
  padding: 4px 8px;
`;

const MenuDivider = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  margin-bottom: 4px;
  margin-top: 4px;
`;

const CheckIconWrapper = styled(Stack)`
  display: none;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
`;

const Label = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;
