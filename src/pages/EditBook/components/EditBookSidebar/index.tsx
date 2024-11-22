import { Box, css, IconButton, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";
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

export interface ContentElement {
  id: number;
  title: string;
  type:
    | "cover"
    | "titlePage"
    | "copyright"
    | "tableOfContents"
    | "introduction"
    | "folder"
    | "chapter";
  subElements?: ContentElement[];
  isActive?: boolean;
  disabled?: boolean;
  isOpen?: boolean;
}

interface Props {
  handleAddContent: () => void;
  contentElements: ContentElement[];
  handleToggleFolder: (element: ContentElement) => void;
}

const contentELementIcons = {
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
  handleAddContent,
  handleToggleFolder,
}) => {
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
              <Folder key={element.id}>
                <FolderNavItem
                  isFilledIcon={false}
                  onClick={() => handleToggleFolder(element)}
                >
                  <NavTextWrapper>
                    {iconData.icon}
                    <TitleOverflow>{element.title}</TitleOverflow>
                  </NavTextWrapper>

                  <ChevronIconButton
                    isOpen={element.isOpen}
                    className="hide-on-hover"
                  >
                    <ChevronDownSmallIcon />
                  </ChevronIconButton>

                  <DotsIconButton className="dots-icon">
                    <HorizontalDots />
                  </DotsIconButton>
                </FolderNavItem>

                <SubElementsList isOpen={element.isOpen}>
                  {element?.subElements?.map((file) => (
                    <SubFile key={file.id}>
                      <NavItem
                        disabled={file.disabled}
                        isFilledIcon
                        active={file.isActive}
                      >
                        <NavTextWrapper>
                          <FileTextIcon />
                          {file.title}
                        </NavTextWrapper>
                        <DotsIconButton className="dots-icon">
                          <HorizontalDots />
                        </DotsIconButton>
                      </NavItem>
                    </SubFile>
                  ))}
                </SubElementsList>
              </Folder>
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

              <DotsIconButton className="dots-icon">
                <HorizontalDots />
              </DotsIconButton>
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

const NavItem = styled("div")<{
  active?: boolean;
  isFilledIcon?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 32px;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: 0.5px solid transparent;

  svg path {
    ${({ isFilledIcon, theme }) =>
      !isFilledIcon &&
      css`
        stroke: ${theme.palette.grey[200]};
      `}

    ${({ isFilledIcon, theme }) =>
      isFilledIcon &&
      css`
        fill: ${theme.palette.grey[200]};
      `}
  }

  &:hover {
    ${({ theme, isFilledIcon }) => css`
      color: ${theme.palette.grey[400]};

      svg path {
        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[400]};
        `}

        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[400]};
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

  ${({ active, theme, isFilledIcon }) =>
    active &&
    css`
      color: ${theme.palette.grey[400]};

      svg path {
        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[400]};
        `}

        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[400]};
          stroke: auto;
        `}
      }

      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;
    `}

  ${({ disabled, theme, isFilledIcon }) =>
    disabled &&
    css`
      background-color: ${theme.palette.grey[500]};
      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;

      &:hover {
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
      }
    `}
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
