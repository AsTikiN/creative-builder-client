import { styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Header, HeaderProps } from "@modules/Header";
import { AccountSidebar } from "@modules/AccountSidebar";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export interface AccountSidebarLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
}

export const AccountSidebarLayout: FC<AccountSidebarLayoutProps> = ({
  children,
  headerProps,
}) => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs, "breadcrumbs");

  return (
    <Wrapper>
      {/* <WorkspacesBoard /> */}
      <AccountSidebar />
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
        {/* <CustomBreadcrumbs>
          {breadcrumbs.map((breadcrumb) => breadcrumb.breadcrumb)}
        </CustomBreadcrumbs> */}
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

export default AccountSidebarLayout;
