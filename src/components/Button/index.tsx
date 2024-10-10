import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { css, styled } from "@mui/material";

interface ButtonProps extends LoadingButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export const StyledButton = styled(LoadingButton)`
  text-transform: none;
  padding: 6px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  ${({ theme }) => theme.typography.body1};

  &.MuiButtonBase-root {
    box-shadow: inset 0px 10px 10px 0px rgba(255, 255, 255, 0.16) !important;
    border: 1px solid !important;
    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0) 100%
    ) !important;
  }

  & .MuiButton-icon {
    margin: 0;
  }

  ${(props) =>
    props.variant === "contained" &&
    css`
      /* background-color: ${props.theme.palette.primary.main}; */
      padding: 5px;

      color: ${props.theme.palette.primary.contrastText};
      /* box-shadow:
        0 4px 4px rgba(0, 0, 0, 0.25),
        inset 0 0 0 1px rgba(0, 0, 0, 0.16),
        inset 0 -2px 0 0 rgba(0, 0, 0, 0.05); */

      /* &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #3183d9;
        box-sizing: border-box;
        border-radius: 8px;
      } */
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border: 0.5px solid ${props.theme.palette.grey[100]};
      color: ${props.theme.palette.grey[200]};
      box-shadow: none;
    `}

    line-height: 20px;

  &,
  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;

const ButtonText = styled("span")`
  padding: 0 4px;
`;
