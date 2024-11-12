import {
  alpha,
  Avatar,
  Badge,
  Box,
  css,
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
import { routes } from "@config/routes";
import { useNavigate } from "react-router-dom";
import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { ToggleButton } from "@components/ToggleButton";
import { StudioDisplayIcon } from "@/icons/StudioDisplayIcon";
import { RgbIcon } from "@/icons/RgbIcon";
import { DarkRgbIcon } from "@/icons/DarkRgbIcon";

export const WorkspacesBoard = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [selectedTheme, setSelectedTheme] = useState<string>("system");

  return (
    <Wrapper>
      <Workspaces>
        <Workspace active icon={<FramerIcon />} />
        <Workspace icon={<FigmaIcon />} />
        <Workspace icon={<SketchIcon />} />
        <Workspace icon={<CanvaIcon />} />
        <AddButton>
          <SmallPlusIcon />
        </AddButton>
      </Workspaces>

      <AvatarWrapper>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          onClick={() => setIsOpen(true)}
          isOpen={isOpen}
        >
          <StyledAvatar
            isOpen={isOpen}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </StyledBadge>

        <DropDownAnchor>
          <Dropdown
            isOpen={isOpen}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            topSection={
              <ToggleButton
                defaultValue={selectedTheme}
                onChange={(value) => setSelectedTheme(value || "system")}
                options={[
                  {
                    value: "system",
                    content: (
                      <ThemeItemWrapper>
                        <StudioDisplayIcon />
                      </ThemeItemWrapper>
                    ),
                  },
                  {
                    value: "light",
                    content: (
                      <ThemeItemWrapper>
                        <RgbIcon />
                      </ThemeItemWrapper>
                    ),
                  },
                  {
                    value: "dark",
                    content: (
                      <ThemeItemWrapper>
                        <DarkRgbIcon />
                      </ThemeItemWrapper>
                    ),
                  },
                ]}
              />
            }
            options={[
              {
                id: 1,
                label: "Account settings",
                value: "Account settings",
                onClick: () => {
                  navigate(routes.profile());
                },
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
  border-right: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  box-sizing: border-box;
  width: 64px;
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

  svg path {
    stroke: ${({ theme }) => theme.palette.grey[200]};
  }
`;

const StyledBadge = styled(Badge)<{ isOpen: boolean }>`
  cursor: pointer;

  & .MuiBadge-badge {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    background-color: ${({ theme }) => theme.palette.success.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.background.paper};

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ripple 1.2s infinite ease-in-out;
      border: 1px solid currentColor;
      content: "";
    }
  }
`;

const AvatarWrapper = styled(Box)`
  position: relative;
`;

const DropDownAnchor = styled("div")`
  position: absolute;
  bottom: 60px;
  /* left: -90px; */
`;

const StyledAvatar = styled(Avatar)<{ isOpen: boolean }>`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  color: transparent;
  position: relative;
  overflow: visible;

  ${({ isOpen }) =>
    isOpen &&
    css`
      &:before {
        content: "";
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid #eaeaea;
        position: absolute;
        top: -4px;
        left: -4px;
      }
    `}
`;

const ThemeItemWrapper = styled(Stack)`
  justify-content: center;
  align-items: center;
`;
