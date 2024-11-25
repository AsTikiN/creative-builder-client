import { css, IconButton, Stack, styled } from "@mui/material";
import { NavItem } from "../NavItem";
import { DotsButton } from "../DotsButton";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { ContentElement, IconData } from "../..";
import { FC, MouseEventHandler } from "react";
import { ChevronDownSmallIcon } from "@/icons/ChevronDownSmallIcon";
import { DropdownOption } from "@components/Dropdown";

interface Props {
  element: ContentElement;
  handleToggleFolder: (element: ContentElement) => void;
  handleDotsClick: MouseEventHandler<HTMLButtonElement>;
  handleDotsOptionClick: (
    option: DropdownOption,
    element: ContentElement
  ) => void;
  iconData: IconData;
}

export const SidebarFolder: FC<Props> = ({
  element,
  handleToggleFolder,
  handleDotsClick,
  handleDotsOptionClick,
  iconData,
}) => {
  return (
    <Folder key={element.id}>
      <FolderNavItem
        isFilledIcon={false}
        onClick={() => handleToggleFolder(element)}
      >
        <NavTextWrapper>
          <DefaultIcon className="default-icon">{iconData.icon}</DefaultIcon>
          <HoverIcon isOpen={element.isOpen} className="hover-icon">
            <ChevronDownSmallIcon />
          </HoverIcon>
          <TitleOverflow>{element.title}</TitleOverflow>
        </NavTextWrapper>

        <ChevronIconButton isOpen={element.isOpen} className="hide-on-hover">
          <ChevronDownSmallIcon />
        </ChevronIconButton>

        <DotsButton
          handleDotsClick={handleDotsClick}
          handleDotsOptionClick={handleDotsOptionClick}
          element={element}
        />
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
              <DotsButton
                handleDotsClick={handleDotsClick}
                handleDotsOptionClick={handleDotsOptionClick}
                element={file}
              />
            </NavItem>
          </SubFile>
        ))}
      </SubElementsList>
    </Folder>
  );
};

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

      .default-icon {
        display: none;
      }

      .hover-icon {
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

const DefaultIcon = styled(Stack)`
  display: flex;
  width: 20px;
`;

const HoverIcon = styled(Stack)<{ isOpen?: boolean }>`
  display: none;
  width: 20px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
