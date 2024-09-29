import { PlusIcon } from "@/icons/PlusIcon";
import { Avatar, Badge, styled } from "@mui/material";
import { Workspace } from "./components/Workspace";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { FramerIcon } from "@/icons/FramerIcon";
import { SketchIcon } from "@/icons/SketchIcon";
import { CanvaIcon } from "@/icons/CanvaIcon";

export const WorkspacesBoard = () => {
  return (
    <Wrapper>
      <Workspaces>
        <Workspace icon={<FramerIcon />} />
        <Workspace icon={<FigmaIcon />} />
        <Workspace icon={<SketchIcon />} />
        <Workspace icon={<CanvaIcon />} />
        <AddButton>
          <PlusIcon />
        </AddButton>
      </Workspaces>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;

  //TODO: move to theme
  padding: 12px;
  border-right: 1px solid #e0e0e0;
`;

const Workspaces = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;

  //TODO: move to theme
  gap: 12px;
`;

const AddButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  //TODO: move to theme
  border-radius: 8px;
  border: 0.5px solid rgba(36, 36, 36, 0.1);
  background-color: #fff;
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));
