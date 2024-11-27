import { Box, styled } from "@mui/material";
import { TCurrentChapter } from "@/pages/EditBook";
import { TipTapEditor } from "./modules/TipTapEditor";

type TEditor = TCurrentChapter;

export const Editor = ({ currentChapter }: TEditor) => {
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
