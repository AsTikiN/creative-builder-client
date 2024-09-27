import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { css, styled } from "@mui/material";

interface ButtonProps extends LoadingButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const StyledButton = styled(LoadingButton)`
  ${(props) =>
    props.variant === "contained" &&
    css`
      background-color: ${props.theme.palette.primary.main};
      color: ${props.theme.palette.primary.contrastText};
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border: 0.5px solid ${props.theme.palette.grey[100]};
      color: ${props.theme.palette.grey[200]};
    `}

  text-transform: none;
  // TODO: add padding to theme
  padding: 4px 20px;

  &,
  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;
