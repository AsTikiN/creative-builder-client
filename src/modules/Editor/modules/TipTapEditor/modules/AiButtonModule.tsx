import { Box, IconButton, Stack, styled } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { ArrowUpCircleIcon } from "@/icons/ArrowUpCircleIcon";
import { CircleOutlinedCheckIcon } from "@/icons/CircleOutlinedCheckIcon";
import { FeatherIcon } from "@/icons/FeatherIcon";
import { MagicWandIcon } from "@/icons/MagicWandIcon";
import { ShineIcon } from "@/icons/ShineIcon";
import { TranslateIcon } from "@/icons/TransalteIcon";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { DropdownMenu } from "@modules/Editor/components/Dropdown";
import { Editor } from "@tiptap/react";

const sections = [
  {
    id: 1,
    title: "Suggested",
    options: [
      {
        label: "Improve writing",
        value: "improve",
        icon: <ShineIcon />,
        id: 1,
      },
      {
        label: "Fix spelling & grammar",
        value: "grammar",
        icon: <CircleOutlinedCheckIcon />,
        id: 2,
      },
      {
        label: "Translate",
        value: "translate",
        icon: <TranslateIcon />,
        id: 3,
        subItems: [
          { label: "English", value: "english", id: 1 },
          { label: "Korean", value: "korean", id: 2 },
          { label: "Chinese, Simplified", value: "chinese_simplified", id: 3 },
          {
            label: "Chinese, Traditional",
            value: "chinese_traditional",
            id: 4,
          },
          { label: "Japanese", value: "japanese", id: 5 },
          { label: "Spanish", value: "spanish", id: 6 },
          { label: "Russian", value: "russian", id: 7 },
          { label: "French", value: "french", id: 8 },
          { label: "Portuguese", value: "portuguese", id: 9 },
          { label: "German", value: "german", id: 10 },
          { label: "Italian", value: "italian", id: 11 },
          { label: "Dutch", value: "dutch", id: 12 },
          { label: "Indonesian", value: "indonesian", id: 13 },
          { label: "Filipino", value: "filipino", id: 14 },
          { label: "Vietnamese", value: "vietnamese", id: 15 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Edits",
    options: [
      {
        label: "Make longer",
        value: "longer",
        icon: <FeatherIcon />,
        id: 4,
      },
      {
        label: "Make shorter",
        value: "shorter",
        icon: <FeatherIcon />,
        id: 5,
      },
      {
        label: "Simplify language",
        value: "simplify",
        icon: <FeatherIcon />,
        id: 6,
      },
      {
        label: "Adjust tone",
        value: "tone",
        icon: <FeatherIcon />,
        id: 7,
        subItems: [
          { label: "Casual", value: "casual", id: 1 },
          { label: "Conversational", value: "conversational", id: 2 },
          { label: "Straightforward", value: "straightforward", id: 3 },
          { label: "Confident", value: "confident", id: 4 },
          { label: "Formal", value: "formal", id: 5 },
        ],
      },
    ],
  },
];

interface Props {
  editor: Editor;
}

export const AiButtonModule: FC<Props> = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenDropdownClick = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={dropdownRef}>
      <EditorButton
        onClick={handleOpenDropdownClick}
        startIcon={<MagicWandIcon />}
      >
        Ask AI
      </EditorButton>

      {isOpenDropdown && (
        <DropdownAiSection>
          <AiSearchWrapper>
            <Input placeholder="Ask AI to do anything..." fullWidth />
            <ArrowUpIconButton>
              <ArrowUpCircleIcon />
            </ArrowUpIconButton>
          </AiSearchWrapper>

          <DropdownMenu width="252px" sections={sections} />
        </DropdownAiSection>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: relative;
`;

const EditorButton = styled(Button)`
  text-transform: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  ${({ theme }) => theme.typography.body1};
  white-space: nowrap;
  position: relative;
  padding: 4px 6px;
  &:hover {
    color: ${({ theme }) => theme.palette.grey[400]};
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const DropdownAiSection = styled(Stack)`
  position: absolute;
  top: 42px;
  left: 0;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: flex-start;

  .MuiTextField-root {
    background-color: #fff;
    padding-right: 30px;
  }
`;

const AiSearchWrapper = styled(Box)`
  width: 545px;
  box-shadow:
    0px 24px 24px -8px #0d0d0d08,
    0px 10px 10px -5px #0d0d0d08,
    0px 5px 5px -2.5px #0d0d0d08,
    0px 3px 3px -1.5px #0d0d0d0a,
    0px 2px 2px -1px #0d0d0d0a,
    0px 1px 1px -0.5px #0d0d0d08,
    0px 0px 0px 0.5px #002a570f,
    0px 0px 0.5px 0px #0d0d0d66;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  position: relative;
  border: none;

  .MuiBox-root {
    height: auto;
    border: none;
  }

  .MuiFormControl-root {
    height: auto;
    /* padding: 10px 36px 10px 12px; */
    padding: 4px;
    border: none;

    & > .MuiInputBase-root {
      padding: 6px 6px 6px 8px;
    }
  }
`;

const ArrowUpIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
