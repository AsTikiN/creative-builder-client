import { Box, Breadcrumbs, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CrossIcon } from "@/icons/CrossIcon";
import { IconButton } from "@components/IconButton";
import { Select } from "@components/Select";
import { Editor } from "@modules/Editor";

import { SettingsIcon } from "@/icons/SettingsIcon";

import { routes } from "@config/routes";

import { Button } from "@components/Button";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs.tsx";

import Menu from "@components/Menu";
import {
  DropdownMenu,
  DropdownOption,
} from "@modules/Editor/components/Dropdown";
import {
  ChapterDto,
  UpdateChapterApiArg,
  UpdateChapterDto,
  useCreateChapterMutation,
  useGetAppQuery,
  useGetChaptersQuery,
  useUpdateChapterMutation,
} from "@store/api/baseApi";
import { sections } from "@/pages/EditBook/settings.tsx";
import { ContentElement, EditBookSidebar } from "./modules/EditBookSidebar";
import { viewOptions } from "./mock/mockContentElements";
import { chaptersToSidebarElements } from "./utils/chaptersToSidebarElements";
export interface ICurrentChapter {
  id: string;
  title: string;
  content: string;
  type: string;
  appId: string;
}

export type TCurrentChapter = ICurrentChapter | null;

export const EditBookPage = () => {
  const navigate = useNavigate();
  const { id: bookId, chapterId } = useParams<{
    id: string;
    chapterId: string;
  }>();
  const [addChapter] = useCreateChapterMutation();
  const [updateMutation] = useUpdateChapterMutation<UpdateChapterDto>();

  const { data: book } = useGetAppQuery(
    { id: bookId as string },
    {
      skip: !bookId,
    },
  );

  const { data: chapters, isLoading: chaptersLoading } = useGetChaptersQuery(
    { appId: bookId as string },
    {
      skip: !bookId,
    },
  );
  console.log("chapters", chapters);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const breadcrumbs = useBreadcrumbs({
    customPathname: `apps/${book?.title || ""}`,
  });

  const [contentElements, setContentElements] = useState<ContentElement[]>(
    chaptersToSidebarElements([]),
  );

  const handleToggleFolder = (element: ContentElement) => {
    setContentElements((prevElements) =>
      prevElements.map((item) =>
        item.id === element.id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAddContentClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddElement = (option: DropdownOption) => () => {
    addChapter({
      appId: bookId as string,
      createChapterDto: {
        title: option.label,
        content: "",
        type: option.value as ChapterDto["type"],
      },
    });
  };

  const handleUpdateChapter = (content: string) => {
    updateMutation({
      id: currentChapter?.id,
      updateChapterDto: {
        content,
        appId: bookId,
      },
    } as UpdateChapterApiArg);
  };

  const handleChangeChapter = (chapterId: string) => {
    if (!bookId) return;
    navigate(routes.bookChapter(bookId, chapterId), {
      replace: true,
    });
  };
  useEffect(() => {
    if (!chapters || !bookId) return;
    if (!chapters.length || !chapterId) {
      navigate(routes.editBook(bookId), {
        replace: true,
      });
    }
  }, [chapterId, chapters]);
  const [currentChapter, setCurrentChapter] = useState<TCurrentChapter>(null);

  useEffect(() => {
    if (!chapters || !bookId) return;
    setContentElements(chaptersToSidebarElements(chapters));
    if (chapters && chapterId) {
      const matchedChapter = chapters.find(
        (chapter) => chapter.id === chapterId,
      );
      setCurrentChapter(matchedChapter || chapters[0]);
    } else if (chapters.length >= 1) {
      const defaultChapter = chapters[0];
      setCurrentChapter(defaultChapter);
      if (defaultChapter) {
        navigate(routes.bookChapter(bookId, defaultChapter.id), {
          replace: true,
        });
      }
    }
  }, [chapterId, chapters, bookId, navigate]);

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
            currentChapter={currentChapter}
            handleChangeChapter={handleChangeChapter}
            handleAddContent={handleAddContentClick}
            contentElements={contentElements}
            chaptersLoading={chaptersLoading}
            setContentElements={setContentElements}
            handleToggleFolder={handleToggleFolder}
          />
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            handleClose={handleClose}
          >
            <DropdownMenu sections={sections} onClick={handleAddElement} />
          </Menu>
          <EditorWrapper>
            <Editor
              currentChapter={currentChapter}
              handleUpdateChapter={handleUpdateChapter}
            />
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
