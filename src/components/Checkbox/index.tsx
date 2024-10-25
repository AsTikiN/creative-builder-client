import React from "react";
import { Checkbox as MuiCheckbox, CheckboxProps, styled } from "@mui/material";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CustomCheckbox
      {...props}
      icon={<CheckboxWrapper />}
      checkedIcon={<CheckedIcon checked={props.checked} />}
      checked={props.disabled || props.checked}
    />
  );
};

const CustomCheckbox = styled(MuiCheckbox)`
  padding: 0;
  &:hover {
    background-color: transparent;
  }
  & .MuiSvgIcon-root {
    font-size: 18px;
  }

  &.Mui-disabled span {
    border: 1px solid ${({ theme }) => theme.palette.grey[700]};
    background-color: #eaeaea;

    &::after {
      border-bottom: solid ${({ theme }) => theme.palette.grey[700]};
      border-right: solid ${({ theme }) => theme.palette.grey[700]};
    }
  }
`;

const CheckboxWrapper = styled("span")`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 0.5px solid #b9babb;
  border-radius: 4px;
  position: relative;
  background-color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1.5px solid #a6a6a61a;
    border-radius: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border: 0.5px solid;
    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const CheckedIcon = styled("span")<{ checked?: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: relative;
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    top: ${({ checked }) => (checked ? "2px" : "1px")};
    left: 5px;
    width: 5px;
    height: 9px;
    border: solid ${({ theme }) => theme.palette.common.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
