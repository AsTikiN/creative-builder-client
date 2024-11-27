import { EditIcon } from "@/icons/EditIcon";
import { UsersIcon } from "@/icons/UsersIcon";

export const initialCheckedItems = {
  cover: { status: false, element: { title: "Cover", type: "cover" } },
  titlePage: {
    status: false,
    element: { title: "Title Page", type: "titlePage" },
  },
  copyright: {
    status: false,
    element: { title: "Copyright", type: "copyright" },
  },
  tableOfContents: {
    status: false,
    element: { title: "Table of Contents", type: "tableOfContents" },
  },
  introduction: {
    status: false,
    element: { title: "Introduction", type: "introduction" },
  },
  folder: {
    status: false,
    element: { title: "Folder", type: "folder" },
  },
  chapter: {
    status: false,
    element: { title: "Chapter", type: "chapter" },
  },
  part: {
    status: false,
    element: { title: "Part", type: "part" },
  },
  conclusion: {
    status: false,
    element: { title: "Conclusion", type: "conclusion" },
  },
};

export const viewOptions = [
  { label: "Creator view", value: "creator", icon: <EditIcon /> },
  { label: "Consumer view", value: "consumer", icon: <UsersIcon /> },
];
