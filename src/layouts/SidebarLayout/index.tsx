import { BookCard } from "@components/BookCard";
import { Header } from "@modules/Header";
import { Sidebar } from "@modules/Sidebar";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const SidebarLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <WorkspacesBoard />
      <Sidebar />
      <Main>
        <Header />

        <Content>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          {/* {children} */}
        </Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Main = styled("div")`
  flex: 1;
`;

const Content = styled("div")`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default SidebarLayout;
