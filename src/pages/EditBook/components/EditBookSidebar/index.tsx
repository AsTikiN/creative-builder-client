import {
  alpha,
  Box,
  css,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { DashedCopyIcon } from "@/icons/DashedCopyIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LowIcon } from "@/icons/LowIcon";
import { SidebarPlusIcon } from "@/icons/SidebarPlusIcon";
import { TrashIcon } from "@/icons/TrashIcon";

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
}

interface Props {
  handleAddContent: () => void;
  contentElements: ContentElement[];
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

        {/*<NavItem>*/}
        {/*  <NavTextWrapper>*/}
        {/*    <LayoutGridIcon />*/}
        {/*    Formatting*/}
        {/*  </NavTextWrapper>*/}
        {/*</NavItem>*/}

        {/*<NavItem>*/}
        {/*  <NavTextWrapper>*/}
        {/*    <AudioIcon />*/}
        {/*    Audiobook*/}
        {/*  </NavTextWrapper>*/}
        {/*</NavItem>*/}

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
                <NavItem isFilledIcon={!isFolder}>
                  <NavTextWrapper>
                    {iconData.icon}
                    {element.title}
                  </NavTextWrapper>
                </NavItem>

                {element?.subElements?.map((file) => (
                  <SubFile key={file.id}>
                    <NavItem isFilledIcon>
                      <NavTextWrapper>
                        <FileTextIcon />
                        {file.title}
                      </NavTextWrapper>
                    </NavItem>
                  </SubFile>
                ))}
              </Folder>
            );

          return (
            <NavItem isFilledIcon={iconData.isFilled}>
              <NavTextWrapper>
                {iconData.icon}
                {element.title}
              </NavTextWrapper>
            </NavItem>
          );
        })}
      </TopSections>
      <NavItem>
        <NavTextWrapper>
          <DashedCopyIcon />
          Templates
        </NavTextWrapper>
      </NavItem>
      <NavItem>
        <NavTextWrapper>
          <TrashIcon />
          Trash
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

const NavItem = styled("div")<{ active?: boolean; isFilledIcon?: boolean }>`
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

      border: 0.5px solid ${alpha(theme.palette.grey[300], 0.1)};
    `}
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const TopSections = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Folder = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const SubFile = styled(Stack)`
  & > div {
    padding-left: 24px;
  }
`;
