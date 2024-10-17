import { AudioIcon } from "@/icons/AudioIcon";
import { DashedCopyIcon } from "@/icons/DashedCopyIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LayoutSidebarIcon } from "@/icons/LayoutSidebarIcon";
import { LayoutTopBarIcon } from "@/icons/LayoutTopBarIcon";
import { LineChartIcon } from "@/icons/LineChartIcon";
import { LowIcon } from "@/icons/LowIcon";
import { SidebarPlusIcon } from "@/icons/SidebarPlusIcon";
import { TrashIcon } from "@/icons/TrashIcon";
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

const bookStructure = [
  {
    id: 1,
    type: "folder",
    title: "Part",
    files: [
      {
        id: 1,
        type: "file",
        title: "Chapter",
      },
      {
        id: 2,
        type: "file",
        title: "Chapter",
      },
    ],
  },
  {
    id: 2,
    type: "file",
    title: "Chapter",
  },
];

interface Props {
  handleAddContent: () => void;
}

export const EditBookSidebar: FC<Props> = ({ handleAddContent }) => {
  return (
    <Wrapper>
      <TopSections>
        <SectionTitleWrapper>
          <Typography variant="h6" color="grey.50">
            General
          </Typography>
        </SectionTitleWrapper>

        <NavItem isFilledIcon>
          <NavTextWrapper>
            <LayoutTopBarIcon />
            Outline
          </NavTextWrapper>
        </NavItem>

        <NavItem isFilledIcon>
          <NavTextWrapper>
            <LayoutSidebarIcon />
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

        <NavItem>
          <NavTextWrapper>
            <ImageIcon />
            Cover
          </NavTextWrapper>
        </NavItem>

        <NavItem isFilledIcon>
          <NavTextWrapper>
            <FileTextIcon />
            Title Page
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <LowIcon />
            Copyright
          </NavTextWrapper>
        </NavItem>
        <NavItem>
          <NavTextWrapper>
            <FileSearchIcon />
            Table of Contents
          </NavTextWrapper>
        </NavItem>
        <NavItem isFilledIcon>
          <NavTextWrapper>
            <FileTextIcon />
            Introduction
          </NavTextWrapper>
        </NavItem>

        {bookStructure.map((item) => {
          const isFolder = item.type === "folder";
          const icon = isFolder ? <FolderIcon /> : <FileTextIcon />;

          return (
            <Folder key={item.id}>
              <NavItem isFilledIcon={!isFolder}>
                <NavTextWrapper>
                  {icon}
                  {item.title}
                </NavTextWrapper>
              </NavItem>

              {item?.files?.map((file) => (
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
        })}
      </TopSections>

      <NavItem>
        <NavTextWrapper>
          <LineChartIcon />
          Analytics
        </NavTextWrapper>
      </NavItem>
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
  padding: 4px 8px;
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
  padding: 6px 8px;
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
