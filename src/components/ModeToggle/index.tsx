import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';
import { Mode } from '@store/features/theme';

export interface ModeToggleProps extends Omit<IconButtonProps, 'onChange'> {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

export const ModeToggle = ({ mode, onChange, ...props }: ModeToggleProps) => (
  <IconButton
    {...props}
    onClick={() => onChange(mode === 'dark' ? 'light' : 'dark')}
  >
    {mode === 'dark' ? <LightMode /> : <DarkMode />}
  </IconButton>
);
