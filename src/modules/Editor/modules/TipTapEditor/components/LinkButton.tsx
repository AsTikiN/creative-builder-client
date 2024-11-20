import { EditorLinkIcon } from "@/icons/EditorLinkIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { Input } from "@components/Input";
import { DropdownMenu } from "@modules/Editor/components/Dropdown";
import { Box, Stack, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: 1,
    title: "Content",
    options: [
      {
        label: "Part",
        value: "Part",
        icon: <FolderIcon />,
        id: 1,
      },
      {
        label: "Table of Contents",
        value: "toc",
        icon: <FileSearchIcon />,
        id: 2,
      },
      {
        label: "Conclusion",
        value: "conclusion",
        icon: <FileTextIcon />,
        id: 3,
      },
    ],
  },
];

export const LinkButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <EditorLinkIcon />
      </IconButton>

      {isOpen && (
        <DropdownWrapper>
          <DropdownMenu
            size="medium"
            topSection={<Input placeholder="Paste link or search content" />}
            sections={sections}
          />
        </DropdownWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconButton = styled("button")`
  padding: ${({ theme }) => theme.spacing(1, 1.5)};
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DropdownWrapper = styled(Stack)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  gap: ${({ theme }) => theme.spacing(3)};
  width: 304px;
`;
