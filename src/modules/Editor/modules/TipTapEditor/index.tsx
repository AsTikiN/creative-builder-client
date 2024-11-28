import React, { useEffect, useMemo } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { BoldIcon } from "@/icons/BoldIcon";
import { ItalicIcon } from "@/icons/ItalicIcon";
import { UnderlineIcon } from "@/icons/UnderlineIcon";
import { StrokeIcon } from "@/icons/StrokeIcon";
import { TCurrentChapter } from "@/pages/EditBook";
import { debounce } from "@utils/debounce.ts";
import { MenuDropdown } from "../../components/MenuDropdown";
import { AiButtonModule } from "./modules/AiButtonModule";
import { LinkButton } from "./components/LinkButton";
import Placeholder from "@tiptap/extension-placeholder";

interface ITipTapEditor {
  currentChapter?: TCurrentChapter;
  handleUpdateChapter: (content: string) => void;
}

export const TipTapEditor: React.FC<ITipTapEditor> = ({
  currentChapter,
  handleUpdateChapter,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextStyle,
      Color,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({
        placeholder: "Start writing...",
        emptyEditorClass: "is-empty-editor",
      }),
    ],
    content: currentChapter?.content || "",
    onUpdate: ({ editor }) => {
      const content = editor.getJSON();
      onSave(content);
    },
  });

  const onSave = useMemo(
    () =>
      debounce((content) => handleUpdateChapter(JSON.stringify(content)), 1000),
    [handleUpdateChapter],
  );

  useEffect(() => {
    if (!editor) return;

    //If content is empty, initialize the editor with empty content
    const newContent = currentChapter?.content || "";

    if (newContent !== editor.getHTML()) {
      // Updating the content of the editor
      try {
        if (newContent) {
          const contentJSON = JSON.parse(newContent);
          editor.commands.setContent(contentJSON);
        } else {
          // If content is empty, clear the editor
          editor.commands.setContent("");
        }
      } catch (error) {
        console.error("Error while setting content:", error);
      }
    }
  }, [editor, currentChapter?.content]);

  return (
    <>
      {editor && (
        <Bubble editor={editor} tippyOptions={{ duration: 100 }}>
          <Wrapper>
            <AiButtonModule editor={editor} />

            <VerticalDivider />

            <MenuDropdown
              onClick={() => 123}
              editor={editor}
              icon={
                <Typography variant="body1" color="grey.200">
                  Text
                </Typography>
              }
            />
            <VerticalDivider />

            <IconButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              <BoldIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              <ItalicIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <UnderlineIcon />
            </IconButton>

            <IconButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              <StrokeIcon />
            </IconButton>
            <VerticalDivider />

            <LinkButton editor={editor} />
          </Wrapper>
        </Bubble>
      )}
      <EditorWrapper>
        <StyledEditorContent editor={editor} />
      </EditorWrapper>
    </>
  );
};

const Wrapper = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(0.5)};
  border-radius: 10px;
  box-shadow:
    0px 24px 24px -8px #0d0d0d08,
    0px 10px 10px -5px #0d0d0d08,
    0px 5px 5px -2.5px #0d0d0d08,
    0px 3px 3px -1.5px #0d0d0d0a,
    0px 2px 2px -1px #0d0d0d0a,
    0px 1px 1px -0.5px #0d0d0d08,
    0px 0px 0px 0.5px #002a570f,
    0px 0px 0.5px 0px #0d0d0d66;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Bubble = styled(BubbleMenu)`
  width: fit-content;

  & > .MuiBox-root {
    display: flex;
    align-items: center;
  }
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

const VerticalDivider = styled(Box)`
  width: 0.5px;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  margin: 0 1.5px;
`;

const StyledEditorContent = styled(EditorContent)(({ theme }) => ({
  color: "#000",

  "& .ProseMirror": {
    "p, h1,h2,h3,h4,h5,ul,ol,a": {
      margin: "0 !important",
    },
    ...theme.typography.body1,
    gap: "12px",
    "& *::selection": {
      backgroundColor: "#ecf0ff",
    },

    "& p": {
      marginBottom: theme.spacing(2),
      ...theme.typography.editorText,
      color: theme.palette.grey[200],
    },
    "& h1": {
      ...theme.typography.editorH1,
      paddingBottom: "4px",
    },
    "& h2": {
      ...theme.typography.editorH2,
    },
    "& h3": {
      ...theme.typography.h3,
    },
    "& ul, & ol": {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    "& li": {
      marginBottom: theme.spacing(1),
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
    "& [data-type='taskList'] > li > div, & [data-type='taskList'] > li > div > p, & [data-type='taskList'] > li > label":
      {
        display: "inline",
      },
    "& [data-type='taskList']": {
      paddingLeft: 0,
    },
    "& [data-type='taskList'] > li": {
      listStyleType: "none",
    },
    "& [data-type='taskList'] > li > label": {
      gap: theme.spacing(1),
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      top: "2px",

      "& input[type='checkbox']": {
        appearance: "none",
        width: "16px",
        height: "16px",
        border: `1px solid ${theme.palette.grey[100]}`,
        borderRadius: "4px",
        cursor: "pointer",
        margin: 0,

        position: "relative",

        "&:checked": {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,

          "&::after": {
            content: '""',
            position: "absolute",
            left: "4px",
            top: "1px",
            width: "6px",
            height: "9px",
            border: "solid white",
            borderWidth: "0 2px 2px 0",
            transform: "rotate(45deg)",
          },
        },

        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
      },

      "& span": {
        flex: 1,
        ...theme.typography.editorText,
        color: theme.palette.grey[200],
      },
    },
    "& blockquote": {
      borderLeft: `4px solid ${theme.palette.grey[100]}`,
      margin: theme.spacing(0),
      padding: theme.spacing(0, 0, 0, 2),
      color: theme.palette.grey[200],
      fontStyle: "italic",

      "& p": {
        margin: 0,
      },
    },
  },
}));

const EditorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  /* color: #283244; */
  color: #344054;

  min-height: 400px;
  min-width: 0;
  width: 100%;
  /* text-align: justify; */

  div:focus-visible {
    outline: none;
  }

  & > p:not(:first-child),
  & h1:not(:first-child),
  & h2:not(:first-child),
  & h3:not(:first-child),
  & h4:not(:first-child),
  & h5:not(:first-child),
  & h6:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  & > div {
    border: none;
  }

  .tiptap {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    min-width: 0;
    width: 100%;

    @media (max-width: 1200px) {
      margin-left: -1rem;
      padding-left: 1rem;
    }
  }

  .tiptap .is-empty::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .is-empty-editor::before {
    color: #667085 !important;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 120%;
    font-weight: 600;
  }

  h1 {
    font-size: 20px;
    margin: 0;
  }

  h2 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing(6)} 0 0 0;
  }

  h3 {
    font-size: 16px;
  }
`;
