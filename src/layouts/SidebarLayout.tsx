import { Sidebar } from "@modules/Sidebar";
import { Menubar } from "primereact/menubar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const items = [
  {
    label: "Features",
    disabled: true,
  },
];

export const SidebarLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Menubar model={items} />
        <Outlet />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
