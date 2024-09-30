import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { styled } from "@mui/material";

export const WorkspacesStory = () => {
  return (
    <Wrapper>
      <WorkspacesBoard />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  height: 800px;

  & > div {
    height: 100%;
  }
`;
