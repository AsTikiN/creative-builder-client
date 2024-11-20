import { Box, styled } from "@mui/material";
import { TipTapEditor } from "./modules/TipTapEditor";

export const Editor = () => {
  return (
    <Wrapper>
      <TipTapEditor />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  max-width: 720px;
  margin: 0 auto;
`;
