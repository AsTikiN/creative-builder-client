import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps;

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled(TextField)`
  width: 320px;

  .MuiInputBase-input {
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 8px;
  }
`;
