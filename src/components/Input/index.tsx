import React from "react";
import {
  alpha,
  Box,
  css,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";

export type InputProps = TextFieldProps & {
  startIcon?: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({ startIcon, ...props }) => {
  return (
    <Wrapper>
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      <StyledInput {...props} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 320px;

  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: 0px 1px 2px 0px ${alpha("#0A0D14", 0.03)};
  height: 32px;
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 32px;
  border-right: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  margin-right: 2px;
`;

const StyledInput = styled(TextField)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: 0px 1px 2px 0px ${alpha("#0A0D14", 0.03)};
  height: 32px;
  padding-left: 8px;

  &:has(.MuiInputBase-adornedStart) .MuiInputBase-root {
    padding-left: 0;
  }

  .MuiInputBase-root {
    display: flex;
    gap: 6px;

    &::placeholder {
    }
  }

  &:has(.MuiInputBase-adornedStart) .MuiInputBase-root {
    padding-left: 0;
  }

  .MuiInputBase-root {
    display: flex;
    gap: 6px;
  }

  .MuiInputBase-input {
    padding: 0;
    ${({ theme }) => css`
      ${theme.typography.label}
    `}
    color: ${({ theme }) => theme.palette.grey[400]};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
