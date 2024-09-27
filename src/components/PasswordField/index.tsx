import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { forwardRef, useState } from 'react';

export type PasswordFieldProps = TextFieldProps & {};

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ type, InputProps, ...props }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
      <TextField
        {...props}
        type={isHidden ? 'password' : type}
        inputRef={ref}
        InputProps={{
          ...InputProps,
          endAdornment: InputProps?.endAdornment ?? (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);
