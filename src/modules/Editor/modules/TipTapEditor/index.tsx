import React from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { BoldIcon } from "@/icons/BoldIcon";
import { ItalicIcon } from "@/icons/ItalicIcon";
import { UnderlineIcon } from "@/icons/UnderlineIcon";
import { StrokeIcon } from "@/icons/StrokeIcon";
import { MenuDropdown } from "../../components/MenuDropdown";
import { AiButtonModule } from "./modules/AiButtonModule";
import { LinkButton } from "./components/LinkButton";

export const TipTapEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, TextStyle, Color],
    content: `
      <h1>Getting started</h1>
      <h2>There should be nothing to hide</h2>
      <p>Sending money abroad is a big deal for many people living international lives. You might be supporting your family, planning your next adventure, or expanding your business. But did you know that most people are unaware of what they actually pay to send, spend, or receive money internationally?</p>
    
      <h2>There should be nothing to hide</h2>
      <p>Sending money abroad is a big deal for many people living international lives. You might be supporting your family, planning your next adventure, or expanding your business. But did you know that most people are unaware of what they actually pay to send, spend, or receive money internationally?</p>
    `,
  });

  if (!editor) {
    return null; // Return null if editor is not initialized
  }

  return (
    <>
      {editor && (
        <Bubble editor={editor} tippyOptions={{ duration: 100 }}>
          <Wrapper>
            <AiButtonModule />

            <VerticalDivider />

            <MenuDropdown
              onClick={() => 123}
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

            <LinkButton />
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
