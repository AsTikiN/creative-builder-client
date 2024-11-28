import { Box, styled } from "@mui/material";
import { TCurrentChapter } from "@/pages/EditBook";
import { TipTapEditor } from "./modules/TipTapEditor";

interface IEditor {
  currentChapter: TCurrentChapter;
  handleUpdateChapter: (content: string) => void;
}

export const Editor = ({ currentChapter, handleUpdateChapter }: IEditor) => {
  return (
    <Wrapper>
      <TipTapEditor
        currentChapter={currentChapter}
        handleUpdateChapter={handleUpdateChapter}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  max-width: 720px;
  margin: 0 auto;
`;
