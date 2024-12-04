import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "primereact/menu";
import { styled } from "styled-components";

import { routes } from "@config/routes";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      command: () => navigate(routes.main()),
      className: location.pathname === routes.main() ? "active" : "",
    },
    {
      label: "Creatives",
      command: () => navigate(routes.creatives()),
      className: location.pathname === routes.creatives() ? "active" : "",
    },
  ];

  return (
    <Wrapper>
      <StyledMenu style={{ width: "100%", height: "100%" }} model={navItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 200px;
  height: 100vh;
  padding: 10px;
`;

const StyledMenu = styled(Menu)`
  .active {
    background-color: #e9ecef;
    border-radius: 4px;
  }
`;
