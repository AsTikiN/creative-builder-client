import { Box, css, IconButton, Stack, styled, Typography } from "@mui/material";
import {
  Dispatch,
  FC,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LowIcon } from "@/icons/LowIcon";
import { SidebarPlusIcon } from "@/icons/SidebarPlusIcon";
import { HorizontalDots } from "@/icons/HorizontalDots";
import { AudioIcon } from "@/icons/AudioIcon";
import { LayoutGridIcon } from "@/icons/LayoutGridIcon";
import { FileDownloadIcon } from "@/icons/FileDownloadIcon";
import { ChevronDownSmallIcon } from "@/icons/ChevronDownSmallIcon";
import { DotsButton } from "./components/DotsButton";
import { NavItem } from "./components/NavItem";
import { SidebarFolder } from "./components/SidebarFolder";
import { DropdownOption } from "@components/Dropdown";

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
  id: number;
  title: string;
  type: ContentElementType;
  subElements?: ContentElement[];
  isActive?: boolean;
  disabled?: boolean;
  isOpen?: boolean;
  handleDotsClick?: () => void;
}

interface Props {
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
  contentElements,
  setContentElements,
  handleAddContent,
  handleToggleFolder,
}) => {
  const handleDotsClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const handleDotsOptionClick = (
    option: DropdownOption,
    element: ContentElement
  ) => {
    const value = option.value;

    if (value === "delete") {
      setContentElements((prevElements) =>
        prevElements.filter((el) => el.id !== element.id)
      );
    }

    if (value === "duplicate") {
      setContentElements((prevElements) => [
        ...prevElements,
        { ...element, id: Math.floor(Math.random() * 1000000) },
      ]);
    }
  };

  return (
    <Wrapper>
      <TopSections>
        {/*<SectionTitleWrapper>*/}
        {/*  <Typography variant="h6" color="grey.50">*/}
        {/*    General*/}
        {/*  </Typography>*/}
        {/*</SectionTitleWrapper>*/}

        {/*<NavItem>*/}
        {/*  <NavTextWrapper>*/}
        {/*    <WriteIcon />*/}
        {/*    Outline*/}
        {/*  </NavTextWrapper>*/}
        {/*</NavItem>*/}

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

        {contentElements.map((element) => {
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
              active={element.isActive}
              isFilledIcon={iconData.isFilled}
              disabled={element.disabled}
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

const FolderNavItem = styled(NavItem)`
  &:hover {
    ${({ theme, isFilledIcon }) => css`
      background-color: ${theme.palette.grey[500]};
      color: ${theme.palette.grey[200]};

      svg path {
        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[200]};
        `}

        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[200]};
          stroke: auto;
        `}
      }

      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;

      .dots-icon {
        display: flex;
      }
    `}
  }

  &:hover {
    .hide-on-hover {
      display: none;
    }
  }
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

const Folder = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const SubElementsList = styled(Stack)<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

const SubFile = styled(Stack)`
  & > div {
    margin-left: 24px;
  }
`;

const DotsIconButton = styled(IconButton)`
  display: none;
  padding: 4px;
`;

const ChevronIconButton = styled(IconButton)<{ isOpen?: boolean }>`
  padding: 4px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  svg path {
    stroke: ${({ theme }) => theme.palette.grey[50]};
  }
`;

const TitleOverflow = styled("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 32px);
`;
