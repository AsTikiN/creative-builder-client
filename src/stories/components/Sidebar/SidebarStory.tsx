import { styled } from "@mui/material";
import { Sidebar } from "@modules/Sidebar";

export const SidebarStory = () => {
  return (
    <Wrapper>
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  height: 800px;

  & > div {
    height: 100%;
  }
`;
