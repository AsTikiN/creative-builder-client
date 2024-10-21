import { styled, SxProps, Theme, Typography } from "@mui/material";

interface IColumnTitle {
  children: string;
  customStyles?: SxProps<Theme> | undefined;
}
function HeaderCell({ children, customStyles }: IColumnTitle) {
  return (
    <StyledTypography variant="h6" color="grey.400" sx={customStyles}>
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)`
  text-transform: capitalize;
`;
export default HeaderCell;
