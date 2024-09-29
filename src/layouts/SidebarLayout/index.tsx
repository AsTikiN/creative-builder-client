import { Sidebar } from "@modules/Sidebar";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { styled } from "@mui/material";

export const SidebarLayout = () => {
  return (
    <Wrapper>
      <WorkspacesBoard />
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default SidebarLayout;
