import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends Omit<MuiLinkProps<typeof RouterLink>, 'to'> {
  to?: string;
}

export const Link = ({ to, ...props }: LinkProps) => {
  if (!to) return <MuiLink {...props} />;
  return <MuiLink component={RouterLink} to={to} {...props} />;
};
