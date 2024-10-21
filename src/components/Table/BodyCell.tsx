import { GridRenderCellParams } from "@mui/x-data-grid";
import { Box, styled } from "@mui/material";

const BodyCell = (params: GridRenderCellParams) => (
  <Container>{params.value}</Container>
);

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.grey[200]};
`;
export default BodyCell;
