import { Sidebar } from "@modules/Sidebar";
import { styled } from "@mui/material";

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
