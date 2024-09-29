import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps;

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled(TextField)`
  width: 320px;
  //TODO: move to theme
  border: 0.5px solid rgba(36, 36, 36, 0.1);
  border-radius: 8px;

  .MuiInputBase-input {
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    //TODO: move to theme
    color: #5c5c5c;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
