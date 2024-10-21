import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { styled } from "@mui/material";

export type TableProps = DataGridProps;

export default function Table(props: TableProps) {
  return <StyledTable {...props} />;
}

const StyledTable = styled(DataGrid)`
  .MuiDataGrid-cell,
  .MuiDataGrid-columnHeader,
  .MuiDataGrid-columnHeaders,
  .MuiDataGrid-root,
  .MuiDataGrid-filler {
    border-radius: 0 !important;
    border: none;
    border-bottom: none !important;
    padding: 0 !important;
  }
  .MuiDataGrid-columnSeparator {
    display: none;
  }
  .MuiDataGrid-cellEmpty {
    display: none;
  }
  .MuiDataGrid-row.Mui-selected,
  .MuiDataGrid-row.Mui-selected:hover {
    background-color: transparent;
  }
  .MuiDataGrid-root:hover {
    background-color: transparent;
  }
`;
