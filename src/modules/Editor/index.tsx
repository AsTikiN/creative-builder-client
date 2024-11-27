import { Box, styled } from "@mui/material";
import { TCurrentChapter } from "@/pages/EditBook";
import { TipTapEditor } from "./modules/TipTapEditor";

interface IEditor {
  currentChapter?: TCurrentChapter;
}

export const Editor = ({ currentChapter }: IEditor) => {
  return (
    <Wrapper>
      <TipTapEditor currentChapter={currentChapter} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  max-width: 720px;
  margin: 0 auto;
`;
