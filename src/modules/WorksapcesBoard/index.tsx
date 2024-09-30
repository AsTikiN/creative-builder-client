import { PlusIcon } from "@/icons/PlusIcon";
import { alpha, Avatar, Badge, IconButton, Stack, styled } from "@mui/material";
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

const Wrapper = styled(Stack)`
  //TODO: move to theme
  padding: 12px;
  border-right: 1px solid ${({ theme }) => theme.palette.grey[100]};
`;

const Workspaces = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const AddButton = styled(IconButton)`
  width: 40px;
  height: 40px;

  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.success.main,
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
