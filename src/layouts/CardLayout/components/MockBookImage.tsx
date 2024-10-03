import { alpha, styled } from "@mui/material";

export const MockBookImage = styled("div")`
  width: 112px;
  height: 164px;
  border-radius: 4px;
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;
  background: ${({ theme }) => theme.palette.primary.contrastText};

  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.24)};
`;
