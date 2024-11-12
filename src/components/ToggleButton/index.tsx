import {
  css,
  ToggleButton as MuiToggleButton,
  styled,
  ToggleButtonGroup,
} from "@mui/material";
import React, { ReactNode } from "react";

export interface ToggleOption {
  value: string;
  content: ReactNode;
  ariaLabel?: string;
}

export interface ToggleButtonProps {
  options: ToggleOption[];
  defaultValue?: string;
  onChange?: (value: string | null) => void;
  className?: string;
}

export const ToggleButton = ({
  options,
  defaultValue = options[0]?.value,
  onChange,
  className,
}: ToggleButtonProps) => {
  const [selected, setSelected] = React.useState<string | null>(defaultValue);

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setSelected(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <StyledToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChange}
      aria-label="toggle button group"
      className={className}
    >
      {options.map((option) => (
        <StyledToggleButton
          key={option.value}
          isSelected={selected === option.value}
          value={option.value}
          aria-label={option.ariaLabel || option.value}
        >
          {option.content}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  background-color: ${({ theme }) => theme.palette.grey[500]};
  height: 36px;
  padding: 4px;
  gap: 4px;
`;

const StyledToggleButton = styled(MuiToggleButton)<{ isSelected: boolean }>`
  border-radius: 6px !important;
  padding: 0 10px;
  border: none !important;
  text-transform: none;
  width: 50%;
  margin: 0;

  ${({ theme }) => theme.typography.body1};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: #fff !important;
      color: ${theme.palette.grey[400]} !important;
      box-shadow:
        0px 24px 24px -8px #0d0d0d08,
        0px 10px 10px -5px #0d0d0d08,
        0px 5px 5px -2.5px #0d0d0d08,
        0px 3px 3px -1.5px #0d0d0d0a,
        0px 2px 2px -1px #0d0d0d0a,
        0px 1px 1px -0.5px #0d0d0d08,
        0px 0px 0px 0.5px #002a570f,
        0px 0px 0.5px 0px #0d0d0d66;
    `}

  ${({ isSelected, theme }) =>
    !isSelected &&
    css`
      color: ${theme.palette.grey[50]} !important;
    `}
`;
