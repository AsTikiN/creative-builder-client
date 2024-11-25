import { Menu } from "@mui/material";
import { DropdownMenu } from "@modules/Editor/components/Dropdown";
import { ImageIcon } from "@/icons/ImageIcon.tsx";
import { FileTextIcon } from "@/icons/FileTextIcon.tsx";
import { LowIcon } from "@/icons/LowIcon.tsx";
import { FileSearchIcon } from "@/icons/FileSearchIcon.tsx";
import { FolderIcon } from "@/icons/FolderIcon.tsx";
import {
  ContentElement,
  ContentElementType,
} from "@/pages/EditBook/modules/EditBookSidebar";

const sections = [
  {
    id: 1,
    title: "",
    options: [
      {
        label: "Cover",
        value: "cover",
        icon: <ImageIcon />,
        id: 1,
        // disabled: true,
      },
      {
        label: "Title Page",
        value: "titlePage",
        icon: <FileTextIcon />,
        id: 2,
        // disabled: true,
      },
      {
        label: "Copyright",
        value: "copyright",
        icon: <LowIcon />,
        id: 3,
        // disabled: true,
      },
      {
        label: "Table of Contents",
        value: "tableOfContents",
        icon: <FileSearchIcon />,
        id: 4,
        // disabled: true,
      },
      {
        label: "Part",
        value: "part",
        icon: <FolderIcon />,
        id: 5,
      },
      {
        label: "Introduction",
        value: "part",
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
        value: "part",
        icon: <FileTextIcon />,
        id: 8,
      },
    ],
  },
];

const NestedMenu = ({
  anchorEl,
  handleClose,
  handleAddElement,
}: {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleAddElement: (element: ContentElement) => () => void;
}) => {
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
        PaperProps={{
          style: {
            boxShadow:
              " 0px 24px 24px -8px #0d0d0d08,0px 10px 10px -5px #0d0d0d08,0px 5px 5px -2.5px #0d0d0d08,0px 3px 3px -1.5px" +
              " #0d0d0d0a,0px 2px 2px -1px #0d0d0d0a,0px 1px 1px -0.5px #0d0d0d08,0px 0px 0px 0.5px #002a570f,0px 0px 0.5px 0px #0d0d0d66",
          },
        }}
      >
        <DropdownMenu
          sections={[
            {
              ...sections[0],
              options: sections[0].options.map((option) => ({
                ...option,
                onClick: handleAddElement({
                  title: option.label,
                  type: option.value as ContentElementType,
                  id: Math.floor(Math.random() * 1000000),
                }),
              })),
            },
          ]}
        />
      </Menu>
    </div>
  );
};

export default NestedMenu;
