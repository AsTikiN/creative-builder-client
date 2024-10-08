import { Header, HeaderProps } from "@modules/Header";
import { Sidebar } from "@modules/Sidebar";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export interface SidebarLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <Wrapper>
      <WorkspacesBoard />
      <Sidebar />
      <Main>
        <Header {...headerProps} />

        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
