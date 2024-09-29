import { styled } from "@mui/material";
import { ReactNode } from "react";

interface WorkspaceProps {
  icon: ReactNode;
}

export const Workspace = ({ icon }: WorkspaceProps) => {
  return <Wrapper>{icon}</Wrapper>;
};

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  //TODO: move to theme
  border: 0.5px solid rgba(36, 36, 36, 0.1);
`;
