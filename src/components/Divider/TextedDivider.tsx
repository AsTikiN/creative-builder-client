import { Divider, styled } from "@mui/material";

export const TextedDivider = styled(Divider)`
  ${({ theme }) => theme.typography.subtitle1}
  color: ${({ theme }) => theme.palette.grey[50]};

  &:before {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }

  &:after {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
