import { DualChevronIcon } from "@/icons/DualChevronIcon";
import { GroupPeopleIcon } from "@/icons/GroupPeopleIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { alpha, Box, css, styled } from "@mui/material";
import { useState } from "react";

export const NavigationHeader = () => {
  const [open, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>({
    id: 1,
    label: "Account settings",
    value: "Account settings",
  });

  return (
    <Wrapper
      open={open}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!open);
      }}
    >
      <UserData>
        <Box>
          {/* <Avatar variant="rounded" sizes="large" /> */}
          <MockAvatar />
        </Box>

        <Box>
          <UserName>Book Lab</UserName>
          <SelectedPlan>Starter Plan</SelectedPlan>
        </Box>
      </UserData>

      <ChevronWrapper>
        <DualChevronIcon />
      </ChevronWrapper>

      <DropDownAnchor>
        <Dropdown
          options={[
            {
              id: 1,
              label: "Manage members",
              value: "Manage members",
              icon: <GroupPeopleIcon />,
            },
          ]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          dropdownWidth={247}
          isOpen={open}
          setIsOpen={setIsOpen}
        ></Dropdown>
      </DropDownAnchor>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ open: boolean }>`
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};

  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ open, theme }) =>
    open &&
    css`
      &:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        border: 2px solid #eaeaea;
        border-radius: 12px;
      }
    `}
`;

const UserData = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};
`;

const ChevronWrapper = styled("div")`
  height: 16px;
`;

const UserName = styled("div")`
  ${({ theme }) => css`
    ${theme.typography.titleSmall}
  `}

  color: ${({ theme }) => theme.palette.grey[400]};
`;

const SelectedPlan = styled("div")`
  ${({ theme }) => css`
    ${theme.typography.body3}
  `}

  color: ${({ theme }) => theme.palette.grey[200]};
`;

// const SelectWrapper = styled("div")`
//   position: absolute;
//   left: 0;
//   top: 30px;

//   .MuiBox-root {
//     pointer-events: none;
//     opacity: 0;
//   }
// `;

const DropDownAnchor = styled("div")`
  position: absolute;
  left: 0px;
  top: 60px;
`;

const MockAvatar = styled("div")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  border-radius: 6px;
  position: relative;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 24px;
    border-radius: 50%;
    background-color: ${alpha("#fff", 0.72)};
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
  }

  /* background-color: ${({ theme }) => theme.palette.grey[300]}; */
`;
