import { alpha, IconButton as MuiIconButton, styled } from "@mui/material";

export const IconButton = styled(MuiIconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;

  box-shadow: 0px 1px 2px 0px #0a0d1408;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;
