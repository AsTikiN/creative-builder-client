import { Box, BoxProps, styled } from "@mui/material";

export const Divider = ({ ...props }: BoxProps) => <StyledDivider {...props} />;

const StyledDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "0.5px",
  backgroundColor: theme.palette.grey[100],
  margin: "1.5px 0",
}));
