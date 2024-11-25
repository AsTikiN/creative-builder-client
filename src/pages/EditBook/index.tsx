import { Box, Breadcrumbs, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CrossIcon } from "@/icons/CrossIcon";
import { IconButton } from "@components/IconButton";
import { Select } from "@components/Select";
import { Editor } from "@modules/Editor";

import { SettingsIcon } from "@/icons/SettingsIcon";

import { routes } from "@config/routes";

import { Button } from "@components/Button";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs.tsx";
import Menu from "@components/Menu";
import { DropdownMenu } from "@modules/Editor/components/Dropdown";
import { ImageIcon } from "@/icons/ImageIcon.tsx";
import { FileTextIcon } from "@/icons/FileTextIcon.tsx";
import { LowIcon } from "@/icons/LowIcon.tsx";
import { FileSearchIcon } from "@/icons/FileSearchIcon.tsx";
import { FolderIcon } from "@/icons/FolderIcon.tsx";
import { ContentElement, EditBookSidebar } from "./components/EditBookSidebar";
import { mockContentElements, viewOptions } from "./mock/mockContentElements";
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
        disabled: true,
      },
      {
        label: "Title Page",
        value: "titlePage",
        icon: <FileTextIcon />,
        id: 2,
        disabled: true,
      },
      {
        label: "Copyright",
        value: "copyright",
        icon: <LowIcon />,
        id: 3,
        disabled: true,
      },
      {
        label: "Table of Contents",
        value: "tableOfContents",
        icon: <FileSearchIcon />,
        id: 4,
        disabled: true,
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

export const EditBookPage = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const breadcrumbs = useBreadcrumbs({
    customPathname: "apps/Color Mastery in Web Design: Master",
  });
  const [contentElements] = useState<ContentElement[]>(mockContentElements);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <Content>
        <PageHeader>
          <BookData>
            <CustomBreadcrumbs>
              {breadcrumbs.map((breadcrumb) => breadcrumb.breadcrumb)}
            </CustomBreadcrumbs>
          </BookData>
          <Actions>
            <Select
              open={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
              options={viewOptions}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            />
            <Button variant="contained">Publish</Button>

            <IconButton>
              <SettingsIcon />
            </IconButton>

            <IconButton onClick={() => navigate(routes.apps())}>
              <CrossIcon />
            </IconButton>
          </Actions>
        </PageHeader>
        <SidebarContent>
          <EditBookSidebar
            handleAddContent={handleClick}
            contentElements={contentElements}
          />
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            handleClose={handleClose}
          >
            <DropdownMenu sections={sections} />
          </Menu>
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
        </SidebarContent>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  height: 100vh;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* gap: 24px; */
  height: 100vh;
`;

const PageHeader = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
`;

const Actions = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const BookData = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const SidebarContent = styled(Box)`
  display: flex;
  height: 100%;
`;

const EditorWrapper = styled(Box)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(5, 6)};
  padding-top: ${({ theme }) => theme.spacing(25)};
  height: calc(100vh - 72.5px);
  overflow-y: auto;
`;

const CustomBreadcrumbs = styled(Breadcrumbs)`
  padding-left: ${({ theme }) => theme.spacing(2)};

  & .MuiBreadcrumbs-ol li:first-child {
    svg path {
      stroke: ${({ theme }) => theme.palette.grey[200]};
    }
    p {
      color: ${({ theme }) => theme.palette.grey[200]};
    }
  }

  & .MuiBreadcrumbs-separator {
    margin: 0 ${({ theme }) => theme.spacing(3.25)};
    color: ${({ theme }) => theme.palette.grey[700]};
  }

  & .MuiBreadcrumbs-li {
    cursor: pointer;
  }
`;
