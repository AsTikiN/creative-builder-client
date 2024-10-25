import { styled, css } from "@mui/material";
import { FC, useState } from "react";
import { Checkbox } from ".";

interface TabItem {
  id: number;
  label: string;
}

export interface CheckboxProps {
  title: string;
  icon: React.ReactNode;
  tabs: TabItem[];
  disabled?: boolean;
  isFilledIcon?: boolean;
  checked?: boolean;
}

export const CheckboxBlock: FC<CheckboxProps> = ({
  title,
  icon,
  disabled,
  isFilledIcon,
  checked,
}) => {
  return (
    <CheckboxWrapper isDisabled={disabled}>
      <Summary>
        <SummaryText isDisabled={disabled} isFilledIcon={isFilledIcon}>
          {icon} {title}
        </SummaryText>
        <Checkbox disabled={disabled} checked={checked} />
      </Summary>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled("div")<{ isDisabled?: boolean }>`
  box-shadow: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  max-width: 408px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`;

const Summary = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const SummaryText = styled("div")<{
  isDisabled?: boolean;
  isFilledIcon?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme, isDisabled, isFilledIcon }) =>
    isDisabled &&
    css`
      color: ${theme.palette.grey[700]};

      svg path {
        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[700]};
        `}

        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[700]};
        `}
      }
    `}
`;
