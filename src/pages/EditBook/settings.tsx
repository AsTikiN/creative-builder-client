import { ImageIcon } from "@/icons/ImageIcon.tsx";
import { FileTextIcon } from "@/icons/FileTextIcon.tsx";
import { LowIcon } from "@/icons/LowIcon.tsx";
import { FileSearchIcon } from "@/icons/FileSearchIcon.tsx";
import { FolderIcon } from "@/icons/FolderIcon.tsx";
import {
  DropdownOption,
  DropdownSection,
} from "@modules/Editor/components/Dropdown";
import { ChapterDto } from "@store/api/baseApi.ts";

interface Option extends DropdownOption {
  value: ChapterDto["type"];
}

export interface Section extends DropdownSection {
  options: Option[];
}

export const sections: Section[] = [
  {
    id: 1,
    title: "",
    options: [
      {
        label: "Cover",
        value: "cover",
        icon: <ImageIcon />,
        id: 1,
      },
      {
        label: "Title Page",
        value: "titlePage",
        icon: <FileTextIcon />,
        id: 2,
      },
      {
        label: "Copyright",
        value: "copyright",
        icon: <LowIcon />,
        id: 3,
      },
      {
        label: "Table of Contents",
        value: "tableOfContents",
        icon: <FileSearchIcon />,
        id: 4,
      },
      {
        label: "Part",
        value: "part",
        icon: <FolderIcon />,
        id: 5,
      },
      {
        label: "Introduction",
        value: "introduction",
        icon: <FileTextIcon />,
        id: 6,
      },
      {
        label: "Chapter",
        value: "chapter",
        icon: <FileTextIcon />,
        id: 7,
      },
      {
        label: "Conclusion",
        value: "conclusion",
        icon: <FileTextIcon />,
        id: 8,
      },
    ],
  },
];
