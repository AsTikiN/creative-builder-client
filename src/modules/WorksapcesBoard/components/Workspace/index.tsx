import { Box, css, styled } from "@mui/material";
import { ReactNode } from "react";

interface WorkspaceProps {
  icon: ReactNode;
  active?: boolean;
}

export const Workspace = ({ icon, active }: WorkspaceProps) => {
  return <Wrapper active={active}>{icon}</Wrapper>;
};

const Wrapper = styled(Box)<{ active?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  //TODO: move to theme
  border: 0.5px solid rgba(36, 36, 36, 0.1);

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.palette.grey[500]};
      border: 0.5px solid ${theme.palette.grey[100]};

      &:before {
        content: "";
        position: absolute;
        top: -4.5px;
        left: -4.5px;
        width: 48px;
        height: 48px;
        border: 2px solid #eaeaea;
        border-radius: 12px;
      }
    `}
`;
