import { DownloadIcon } from "@/icons/DownloadIcon.tsx";

export const mockBrandBillingData = [
  {
    id: 1,
    invoice: "#8528510235",
    item: "Email Credits",
    type: "One-time",
    total: "$59.00",
    status: "Paid",
    date: "25th Sep 2024",
    download: <DownloadIcon />,
  },
  {
    id: 2,
    invoice: "#8528510235",
    item: "Enterprise Plan",
    type: "Subscription",
    total: "$149.00",
    status: "Paid",
    date: "13th Oct 2024",
    download: <DownloadIcon />,
  },
  {
    id: 3,
    invoice: "#8528510235",
    item: "SMS Credits",
    type: "One-time",
    total: "$34.00",
    status: "Paid",
    date: "12th Jan 2024",
    download: <DownloadIcon />,
  },
];
