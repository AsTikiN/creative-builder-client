import { Box, css, styled } from "@mui/material";

export const Color = styled(Box)<{
  color: string;
  selected: boolean;
  initialColor: string;
}>`
  border-radius: 50%;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background-color: ${({ initialColor }) => initialColor};
  background-color: ${({ color, initialColor }) => color || initialColor};
  position: relative;
  cursor: pointer;

  ${({ selected, color, initialColor }) =>
    selected &&
    css`
      border: 2px solid #fff;

      &:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        width: 20px;
        height: 20px;
        border: 2px solid ${initialColor};
        border: 2px solid ${color || initialColor};
        border-radius: 50%;
      }
    `}
`;
