import { styled } from "@mui/material";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { LayoutTopIcon } from "@/icons/LayoutTopIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { Button, ButtonProps } from "@components/Button";
import { MultipleSelect, SelectOption } from "@components/MultipleSelect";
import { Header, HeaderProps } from "@modules/Header";
import { Sidebar } from "@modules/Sidebar";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { displayDensityOptions } from "./static/displayDensityOptions";

export interface SidebarLayoutProps extends PropsWithChildren {
  headerProps: HeaderProps;
  buttonProps?: ButtonProps;
  displayDensity: string[];
  setDisplayDensity: Dispatch<SetStateAction<string[]>>;
  options?: SelectOption[];
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({
  children,
  headerProps,
  buttonProps,
  displayDensity,
  setDisplayDensity,
  options = displayDensityOptions,
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
                value={displayDensity}
                setValue={setDisplayDensity}
                open={open}
                setIsOpen={setIsOpen}
                options={options}
              />

              <Button
                startIcon={<SmallPlusIcon />}
                variant="contained"
                {...buttonProps}
              >
                {buttonProps?.children}
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
    padding: ${({ theme }) => theme.spacing(3)};
  }

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export default SidebarLayout;
