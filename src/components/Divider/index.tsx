import {Box, styled} from "@mui/material";

export const Divider = () => <StyledDivider />

const StyledDivider = styled(Box)`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  margin: 1.5px 0;
`;

