import { GridColDef } from "@mui/x-data-grid";
import HeaderCell from "@components/Table/HeaderCell.tsx";
import BodyCell from "@components/Table/BodyCell.tsx";
import Chip from "@components/Chip";

export enum BillingColumn {
  INVOICE = "invoice",
  ITEM = "item",
  TYPE = "type",
  TOTAL = "total",
  STATUS = "status",
  DATE = "date",
  DOWNLOAD = "download",
}

export const tableBrandBillingColumns = (): GridColDef[] => {
  return [
    {
      field: BillingColumn.INVOICE,
      headerName: BillingColumn.INVOICE,
      display: "flex",
      minWidth: 100,
      width: 100,
      renderHeader: () => <HeaderCell>{BillingColumn.INVOICE}</HeaderCell>,
      renderCell: (params) => <BodyCell {...params} />,
    },
    {
      field: BillingColumn.ITEM,
      headerName: BillingColumn.ITEM,
      display: "flex",
      minWidth: 128,
      width: 128,
      renderHeader: () => <HeaderCell>{BillingColumn.ITEM}</HeaderCell>,
      renderCell: (params) => <BodyCell {...params} />,
    },
    {
      field: BillingColumn.TYPE,
      headerName: BillingColumn.TYPE,
      display: "flex",
      minWidth: 100,
      width: 100,
      renderHeader: () => <HeaderCell>{BillingColumn.TYPE}</HeaderCell>,
      renderCell: (params) => <BodyCell {...params} />,
    },
    {
      field: BillingColumn.TOTAL,
      headerName: BillingColumn.TOTAL,
      minWidth: 100,
      display: "flex",
      width: 100,
      renderHeader: () => <HeaderCell>{BillingColumn.TOTAL}</HeaderCell>,
      renderCell: (params) => <BodyCell {...params} />,
    },
    {
      field: BillingColumn.STATUS,
      headerName: BillingColumn.STATUS,
      minWidth: 120,
      display: "flex",
      width: 120,
      renderHeader: () => <HeaderCell>{BillingColumn.STATUS}</HeaderCell>,
      renderCell: (params) => {
        return <Chip label={params.value} customVariant="success" />;
      },
    },
    {
      field: BillingColumn.DATE,
      headerName: BillingColumn.DATE,
      minWidth: 150,
      display: "flex",
      width: 150,
      renderHeader: () => <HeaderCell>{BillingColumn.DATE}</HeaderCell>,
      renderCell: (params) => <BodyCell {...params} />,
    },
    {
      field: BillingColumn.DOWNLOAD,
      headerName: BillingColumn.DOWNLOAD,
      minWidth: 20,
      display: "flex",
      width: 20,
      renderHeader: () => <></>,
      renderCell: (params) => <BodyCell {...params} />,
    },
  ];
};
