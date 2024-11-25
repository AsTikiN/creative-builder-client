import { css, styled } from "@mui/material";

export const NavItem = styled("div")<{
  active?: boolean;
  isFilledIcon?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 32px;
  position: relative;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: 0.5px solid transparent;

  svg path {
    ${({ isFilledIcon, theme }) =>
      !isFilledIcon &&
      css`
        stroke: ${theme.palette.grey[200]};
      `}

    ${({ isFilledIcon, theme }) =>
      isFilledIcon &&
      css`
        fill: ${theme.palette.grey[200]};
      `}
  }

  &:hover {
    ${({ theme, isFilledIcon }) => css`
      color: ${theme.palette.grey[400]};

      svg path {
        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[400]};
        `}

        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[400]};
          stroke: auto;
        `}
      }

      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;

      .dots-icon {
        display: flex;
      }
    `}
  }

  ${({ active, theme, isFilledIcon }) =>
    active &&
    css`
      color: ${theme.palette.grey[400]};

      svg path {
        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[400]};
        `}

        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[400]};
          stroke: auto;
        `}
      }

      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;
    `}

  ${({ disabled, theme, isFilledIcon }) =>
    disabled &&
    css`
      background-color: ${theme.palette.grey[500]};
      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;

      &:hover {
        color: ${theme.palette.grey[200]};
        svg path {
          ${!isFilledIcon &&
          css`
            stroke: ${theme.palette.grey[200]};
          `}

          ${isFilledIcon &&
          css`
            fill: ${theme.palette.grey[200]};
            stroke: auto;
          `}
        }
      }
    `}
`;
