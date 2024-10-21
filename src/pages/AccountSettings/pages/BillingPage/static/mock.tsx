import { DownloadIcon } from "@/icons/DownloadIcon.tsx";

export const mockAccountBillingData = [
  {
    id: 1,
    brand: "Figma",
    offer: "Premium Design",
    type: "Subscription",
    total: "$2,300",
    status: "Paid",
    date: "25th Sep 2024",
    download: <DownloadIcon />,
  },
  {
    id: 2,
    brand: "Rotely",
    offer: "Think Fast Book",
    type: "One-time",
    total: "$19.95",
    status: "Paid",
    date: "13th Oct 2024",
    download: <DownloadIcon />,
  },
  {
    id: 3,
    brand: "Walmart",
    offer: "Kids Playset",
    type: "One-time",
    total: "$443.78",
    status: "Paid",
    date: "12th Jan 2024",
    download: <DownloadIcon />,
  },
];
