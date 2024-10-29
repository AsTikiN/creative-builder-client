import { styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { Header, HeaderProps } from "@modules/Header";
import { BrandSettingsSidebar } from "../modules/BrandSettingsSidebar";

export interface BrandSettingsLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
}

export const BrandSidebarLayout: FC<BrandSettingsLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <Wrapper>
      <WorkspacesBoard />
      <BrandSettingsSidebar />
      <Main>
        <Header
          {...headerProps}
          variant="small"
          actions={
            <></>
            // <IconButton onClick={() => navigate(routes.apps())}>
            //   <CrossIcon />
            // </IconButton>
          }
        />
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
  padding: ${({ theme }) => theme.spacing(5)};
  height: calc(100vh - 72.5px);
  overflow-x: auto;
`;
