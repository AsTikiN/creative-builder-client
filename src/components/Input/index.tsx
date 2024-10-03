import React from "react";
import { alpha, css, styled, TextField, TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps;

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled(TextField)`
  width: 320px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: 0px 1px 2px 0px ${alpha("#0A0D14", 0.03)};

  .MuiInputBase-input {
    padding: 6px 8px;
    ${({ theme }) => css`
      ${theme.typography.label}
    `}
    color: ${({ theme }) => theme.palette.grey[200]};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
