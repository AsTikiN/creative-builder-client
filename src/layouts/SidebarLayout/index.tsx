import { LayoutTopIcon } from "@/icons/LayoutTopIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { Button } from "@components/Button";
import { MultipleSelect } from "@components/MultipleSelect";
import { Header, HeaderProps } from "@modules/Header";
import { Sidebar } from "@modules/Sidebar";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { styled } from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";

export interface SidebarLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
  buttonText: string;
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({
  children,
  headerProps,
  buttonText,
}) => {
  const [open, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <WorkspacesBoard />
      <Sidebar />
      <Main>
        <Header
          {...headerProps}
          actions={
            <>
              <MultipleSelect
                open={open}
                setIsOpen={setIsOpen}
                options={[
                  {
                    value: "Display density",
                    label: "Display density",
                    type: "title",
                  },
                  { value: "Compact", label: "Compact", icon: <MenuIcon /> },
                  {
                    value: "Comfortable",
                    label: "Comfortable",
                    icon: <LayoutTopIcon />,
                  },
                  { value: "", label: "", type: "divider" },
                  { value: "Ordering", label: "Ordering", type: "title" },
                  { value: "Recent activity", label: "Recent activity" },
                  { value: "Created", label: "Created" },
                ]}
              />

              <Button startIcon={<SmallPlusIcon />} variant="contained">
                {buttonText}
              </Button>
            </>
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
  & > div {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export default SidebarLayout;
