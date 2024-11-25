import { Box, Stack, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { EditorLinkIcon } from "@/icons/EditorLinkIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { Input } from "@components/Input";
import { DropdownMenu } from "@modules/Editor/components/Dropdown";
import { Editor } from "@tiptap/react";

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

interface Props {
  editor: Editor;
}

export const LinkButton = ({ editor }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [link, setLink] = useState("");

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

  useEffect(() => {
    if (link) {
      editor.commands.setLink({ href: link });
    } else {
      editor.commands.unsetLink();
    }
  }, [link]);

  return (
    <Wrapper ref={wrapperRef}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <EditorLinkIcon />
      </IconButton>

      {isOpen && (
        <DropdownWrapper>
          <DropdownMenu
            size="medium"
            topSection={
              <Input
                placeholder="Paste link or search content"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            }
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
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  &:hover {
    color: ${({ theme }) => theme.palette.grey[400]};
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const DropdownWrapper = styled(Stack)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  gap: ${({ theme }) => theme.spacing(3)};
  width: 304px;
`;
