import { Header, HeaderProps } from "@modules/Header";
import { AccountSidebar } from "@modules/AccountSidebar";
import { styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { IconButton } from "@components/IconButton";
import { CrossIcon } from "@/icons/CrossIcon";

export interface AccountSidebarLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
}

export const AccountSidebarLayout: FC<AccountSidebarLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <Wrapper>
      <WorkspacesBoard />
      <AccountSidebar />
      <Main>
        <Header
          {...headerProps}
          variant="small"
          actions={
            <IconButton>
              <CrossIcon />
            </IconButton>
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
`;

export default AccountSidebarLayout;
