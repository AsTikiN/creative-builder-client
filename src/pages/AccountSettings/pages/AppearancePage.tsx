import { Box, css, Stack, styled, Typography, alpha } from "@mui/material";

import { DarkTheme } from "@/icons/DarkTheme";
import { LightTheme } from "@/icons/LightTheme";
import { CircleFilledCheckIcon } from "@/icons/CircleFilledCheckIcon";
import { useState } from "react";

export const AppearancePage = () => {
  const [selectedTheme, setSelectedTheme] = useState("system");

  const handleThemeChange = (theme: string) => () => {
    setSelectedTheme(theme);
  };

  return (
    <>
      <AccountManagementSection>
        <SectionTitleData>
          <Typography variant="h5" color="grey.400">
            Interface theme
          </Typography>
          <Typography variant="body2" color="grey.200">
            Select or customize your Ul theme
          </Typography>
        </SectionTitleData>

        <InterfaceVariants>
          <InterfaceCardWrapper>
            <InterfaceCard
              selected={selectedTheme === "system"}
              onClick={handleThemeChange("system")}
              system
            >
              <DarkTheme />
              <CutLightTheme>
                <LightTheme />
              </CutLightTheme>
              {selectedTheme === "system" && (
                <CheckThemeWrapper>
                  <CircleFilledCheckIcon />
                </CheckThemeWrapper>
              )}
            </InterfaceCard>
            <Typography
              variant="h6"
              color={selectedTheme === "system" ? "grey.400" : "grey.50"}
            >
              System preference
            </Typography>
          </InterfaceCardWrapper>

          <InterfaceCardWrapper>
            <InterfaceCard
              selected={selectedTheme === "light"}
              onClick={handleThemeChange("light")}
            >
              <ThemeWrapper>
                <LightTheme />
              </ThemeWrapper>
              {selectedTheme === "light" && (
                <CheckThemeWrapper>
                  <CircleFilledCheckIcon />
                </CheckThemeWrapper>
              )}
            </InterfaceCard>
            <Typography
              variant="h6"
              color={selectedTheme === "light" ? "grey.400" : "grey.50"}
            >
              Light
            </Typography>
          </InterfaceCardWrapper>

          <InterfaceCardWrapper>
            <InterfaceCard
              selected={selectedTheme === "dark"}
              onClick={handleThemeChange("dark")}
              dark
            >
              <ThemeWrapper>
                <DarkTheme />
              </ThemeWrapper>
              {selectedTheme === "dark" && (
                <CheckThemeWrapper>
                  <CircleFilledCheckIcon />
                </CheckThemeWrapper>
              )}
            </InterfaceCard>
            <Typography
              variant="h6"
              color={selectedTheme === "dark" ? "grey.400" : "grey.50"}
            >
              Dark
            </Typography>
          </InterfaceCardWrapper>
        </InterfaceVariants>
      </AccountManagementSection>
    </>
  );
};

const SectionTitleData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const AccountManagementSection = styled(Stack)`
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const InterfaceVariants = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const InterfaceCard = styled(Box)<{
  selected: boolean;
  dark?: boolean;
  system?: boolean;
}>`
  width: 148px;
  height: 96px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;

  svg {
    position: absolute;
    top: 4px;
    left: 0;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      border: 1px solid ${theme.palette.primary.main};

      &:before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border: 2px solid ${alpha(theme.palette.primary.main, 0.2)};
        border-radius: 12px;
      }
    `}

  ${({ dark, theme }) =>
    dark &&
    css`
      background-color: ${theme.palette.grey[400]};
    `}

  ${({ system }) =>
    system &&
    css`
      background: rgb(255, 255, 255);
      background: linear-gradient(90deg, #fff 50%, #0d0d0d 50%);
    `}
`;

const CutLightTheme = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  overflow: hidden;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const ThemeWrapper = styled(Box)`
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const CheckThemeWrapper = styled(Box)`
  position: absolute;
  top: 66px;
  left: 8px;
`;

const InterfaceCardWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: flex-start;
`;
