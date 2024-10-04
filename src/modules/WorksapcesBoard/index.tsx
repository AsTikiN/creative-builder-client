import { PlusIcon } from "@/icons/PlusIcon";
import {
  alpha,
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { Workspace } from "./components/Workspace";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { FramerIcon } from "@/icons/FramerIcon";
import { SketchIcon } from "@/icons/SketchIcon";
import { CanvaIcon } from "@/icons/CanvaIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { useState } from "react";
import { ProfileIcon } from "@/icons/ProfileIcon";
import { SwapIcon } from "@/icons/SwapIcon";
import { LifeBuoyIcon } from "@/icons/LifeBuoyIcon";
import { LogOutIcon } from "@/icons/LogOutIcon";

export const WorkspacesBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

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

      <AvatarWrapper>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          onClick={() => setIsOpen(true)}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </StyledBadge>

        <DropDownAnchor>
          <Dropdown
            isOpen={isOpen}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={[
              {
                id: 1,
                label: "Account settings",
                value: "Account settings",
                icon: <ProfileIcon />,
              },
              {
                id: 2,
                label: "Switch to consumer",
                value: "Switch to consumer",
                icon: <SwapIcon />,
              },
              {
                id: 3,
                label: "Help & support",
                value: "Help & support",
                icon: <LifeBuoyIcon />,
              },
              {
                id: 4,
                label: "Log out",
                value: "Log out",
                icon: <LogOutIcon />,
                hasDivider: true,
              },
            ]}
            setIsOpen={setIsOpen}
            dropdownWidth={205}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          ></Dropdown>
        </DropDownAnchor>
      </AvatarWrapper>
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
  cursor: "pointer",

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

const AvatarWrapper = styled(Box)`
  position: relative;
`;

const DropDownAnchor = styled("div")`
  position: absolute;
  bottom: 60px;
  /* left: -90px; */
`;
