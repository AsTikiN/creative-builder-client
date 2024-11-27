import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from "react";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LowIcon } from "@/icons/LowIcon";
import { SidebarPlusIcon } from "@/icons/SidebarPlusIcon";
import { AudioIcon } from "@/icons/AudioIcon";
import { LayoutGridIcon } from "@/icons/LayoutGridIcon";
import { DropdownOption } from "@components/Dropdown";
import { FileDownloadIcon } from "@/icons/FileDownloadIcon";
import { Skeleton } from "@components/Skeleton";
import { useDeleteChapterMutation } from "@store/api/baseApi.ts";
import { TCurrentChapter } from "@/pages/EditBook";
import { DotsButton } from "./components/DotsButton";
import { NavItem } from "./components/NavItem";
import { SidebarFolder } from "./components/SidebarFolder";

export type ContentElementType =
  | "cover"
  | "titlePage"
  | "copyright"
  | "tableOfContents"
  | "introduction"
  | "folder"
  | "chapter"
  | "part"
  | "conclusion";

export interface IconData {
  icon: ReactNode;
  isFilled: boolean;
}

export interface ContentElement {
  id: string;
  title: string;
  type: ContentElementType;
  subElements?: ContentElement[];
  isActive?: boolean;
  disabled?: boolean;
  isOpen?: boolean;
  handleDotsClick?: () => void;
}

interface Props {
  chaptersLoading: boolean;
  currentChapter: TCurrentChapter;
  handleChangeChapter: (id: string) => void;
  handleAddContent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  contentElements: ContentElement[];
  setContentElements: Dispatch<SetStateAction<ContentElement[]>>;
  handleToggleFolder: (element: ContentElement) => void;
}

const contentELementIcons: Record<ContentElementType, IconData> = {
  cover: { icon: <ImageIcon />, isFilled: true },
  titlePage: { icon: <FileTextIcon />, isFilled: true },
  copyright: { icon: <LowIcon />, isFilled: false },
  tableOfContents: { icon: <FileSearchIcon />, isFilled: false },
  introduction: { icon: <FileTextIcon />, isFilled: true },
  folder: { icon: <FolderIcon />, isFilled: false },
  chapter: { icon: <FileTextIcon />, isFilled: true },
  part: { icon: <FolderIcon />, isFilled: false },
  conclusion: { icon: <FileTextIcon />, isFilled: true },
};

export const EditBookSidebar: FC<Props> = ({
  chaptersLoading,
  contentElements,
  setContentElements,
  handleAddContent,
  handleToggleFolder,
  handleChangeChapter,
  currentChapter,
}) => {
  const [deleteChapter] = useDeleteChapterMutation();
  const handleDotsClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const handleDotsOptionClick = (
    option: DropdownOption,
    element: ContentElement,
  ) => {
    const value = option.value;

    if (value === "delete") {
      deleteChapter({
        id: element.id,
      });
    }

    if (value === "duplicate") {
      setContentElements((prevElements) => [
        ...prevElements,
        {
          ...element,
          id: Math.floor(Math.random() * 1000000).toString(),
        },
      ]);
    }
  };

  return (
    <Wrapper>
      <TopSections>
        <NavItem>
          <NavTextWrapper>
            <LayoutGridIcon />
            Formatting
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <AudioIcon />
            Audiobook
          </NavTextWrapper>
        </NavItem>

        <SectionTitleWrapper>
          <Typography variant="h6" color="grey.50">
            Content
          </Typography>

          <IconButton onClick={handleAddContent}>
            <SidebarPlusIcon />
          </IconButton>
        </SectionTitleWrapper>

        {chaptersLoading && (
          <Stack gap={1}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={32}
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
        )}

        {!chaptersLoading &&
          contentElements.map((element) => {
            const iconData = contentELementIcons[element.type];
            if (!iconData) console.log("22222", element.type);
            const isFolder = element.type === "folder";

            if (isFolder)
              return (
                <SidebarFolder
                  key={element.id}
                  element={element}
                  handleToggleFolder={handleToggleFolder}
                  handleDotsClick={handleDotsClick}
                  handleDotsOptionClick={handleDotsOptionClick}
                  iconData={iconData}
                />
              );

            return (
              <NavItem
                active={currentChapter?.id === element.id}
                isFilledIcon={iconData.isFilled}
                disabled={element.disabled}
                onClick={() => handleChangeChapter(element.id)}
              >
                <NavTextWrapper>
                  {iconData.icon}
                  {element.title}
                </NavTextWrapper>

                <DotsButton
                  element={element}
                  handleDotsClick={handleDotsClick}
                  handleDotsOptionClick={handleDotsOptionClick}
                />
              </NavItem>
            );
          })}
      </TopSections>

      <NavItem isFilledIcon>
        <NavTextWrapper>
          <FileDownloadIcon />
          Download
        </NavTextWrapper>
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 272px;
  position: relative;
  z-index: 10;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(3)};
  overflow: auto;
  border-right: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 100%;
`;

const SectionTitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;
  max-width: calc(100% - 32px);
`;

const TopSections = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
`;
