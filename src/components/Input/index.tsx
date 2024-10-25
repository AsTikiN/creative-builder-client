import React from "react";
import {
  alpha,
  Box,
  css,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

export type InputProps = TextFieldProps & {
  startIcon?: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({ startIcon, ...props }) => {
  return (
    <>
      {props.label && (
        <Typography variant="body1" color="grey.400" sx={{ marginBottom: 1 }}>
          {props.label}
          {props.required && (
            <Typography component="span" variant="body1" color="primary.main">
              *
            </Typography>
          )}
        </Typography>
      )}
      <Wrapper>
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        <StyledInput {...props} label={undefined} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 300px;

  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: 0px 1px 2px 0px ${alpha("#0A0D14", 0.03)};
  height: 32px;
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-right: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  padding: ${({ theme }) => theme.spacing(1.5, 2.5)};
`;

const StyledInput = styled(TextField)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  height: 32px;
  padding-left: 8px;
  width: 100%;

  &:has(.MuiInputBase-adornedStart) .MuiInputBase-root {
    padding-left: 0;
  }

  .MuiInputBase-root {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    padding-right: 6px;
  }

  &:has(.MuiInputBase-adornedStart) .MuiInputBase-root {
    padding-left: 0;
  }

  .MuiInputBase-root {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1.5)};
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

  .MuiFormLabel-root {
    display: none;
  }

  .MuiInputLabel-root {
    display: none;
  }
`;
