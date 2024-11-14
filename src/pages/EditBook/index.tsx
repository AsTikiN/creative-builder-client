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
import { AddContentModal } from "./modules/AddContentModal";
import { mockContentElements, viewOptions } from "./mock/mockContentElements";
import { ContentElement, EditBookSidebar } from "./components/EditBookSidebar";

export const EditBookPage = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [contentElements, setContentElements] =
    useState<ContentElement[]>(mockContentElements);

  const breadcrumbs = useBreadcrumbs({
    customPathname: "apps/Color Mastery in Web Design: Master",
  });

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
            handleAddContent={() => setIsModalOpen(true)}
            contentElements={contentElements}
          />
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
        </SidebarContent>
      </Content>

      <AddContentModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contentElements={contentElements}
        setContentElements={setContentElements}
      />
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
