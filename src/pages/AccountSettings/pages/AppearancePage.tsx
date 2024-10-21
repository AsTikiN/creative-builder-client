import {
  Box,
  css,
  Stack,
  styled,
  Typography,
  Divider as MuiDivider,
  alpha,
} from "@mui/material";

import { Input } from "@components/Input";

import { DarkTheme } from "@/icons/DarkTheme";
import { LightTheme } from "@/icons/LightTheme";
import { CircleFilledCheckIcon } from "@/icons/CircleFilledCheckIcon";
import { Divider } from "@components/Divider";
import { useState } from "react";

const initialColors = [
  {
    id: 1,
    color: "#007CFE",
    selected: true,
  },
  {
    id: 2,
    color: "#7A7A7A",
    selected: false,
  },
  {
    id: 3,
    color: "#FF8447",
    selected: false,
  },
  {
    id: 4,
    color: "#FB3748",
    selected: false,
  },
  {
    id: 5,
    color: "#1FC16B",
    selected: false,
  },
  {
    id: 6,
    color: "#7D52F4",
    selected: false,
  },
  {
    id: 7,
    color: "#47C2FF",
    selected: false,
  },
  {
    id: 8,
    color: "#FB4BA3",
    selected: false,
  },
];

export const AppearancePage = () => {
  const [selectedTheme, setSelectedTheme] = useState("system");
  const [colors, setColors] = useState(initialColors);
  const [customColor, setCustomColor] = useState("#007CFE");

  const handleColorClick = (id: number) => () => {
    setColors(
      colors.map((color) =>
        color.id === id
          ? { ...color, selected: true }
          : { ...color, selected: false }
      )
    );
    setCustomColor(
      colors.find((color) => color.id === id)?.color || initialColors[0].color
    );
  };

  const handleThemeChange = (theme: string) => () => {
    setSelectedTheme(theme);
  };

  return (
    <>
      <BrandSection>
        <BrandContainer>
          <SectionTitleData>
            <Typography variant="h5" color="grey.400">
              Brand color
            </Typography>
            <Typography variant="body2" color="grey.200">
              Select or customize your brand color
            </Typography>
          </SectionTitleData>

          <Colors>
            {colors.map((color) => (
              <Color
                key={color.id}
                selected={color.selected}
                initialColor={initialColors[0].color}
                color={color.color}
                onClick={handleColorClick(color.id)}
              />
            ))}
          </Colors>

          <TextedDivider>OR</TextedDivider>

          <CustomColorWrapper>
            <Typography variant="body1" color="grey.400">
              Custom color
            </Typography>

            <CustomColorInput>
              <Input
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
              />
              <Color
                initialColor={initialColors[0].color}
                color={customColor}
                selected
              />
            </CustomColorInput>
          </CustomColorWrapper>
        </BrandContainer>
      </BrandSection>

      <Divider />

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

const BrandSection = styled(Box)`
  padding-bottom: 16px;
`;

const BrandContainer = styled(Box)`
  max-width: 248px;
`;

const SectionTitleData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const AccountManagementSection = styled(Stack)`
  padding: ${({ theme }) => theme.spacing(4, 0)};
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const Colors = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(4)} 0;
`;

const Color = styled(Box)<{
  color: string;
  selected: boolean;
  initialColor: string;
}>`
  border-radius: 50%;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background-color: ${({ initialColor }) => initialColor};
  background-color: ${({ color, initialColor }) => color || initialColor};
  position: relative;
  cursor: pointer;

  ${({ selected, color, initialColor }) =>
    selected &&
    css`
      border: 2px solid #fff;

      &:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        width: 20px;
        height: 20px;
        border: 2px solid ${initialColor};
        border: 2px solid ${color || initialColor};
        border-radius: 50%;
      }
    `}
`;

const TextedDivider = styled(MuiDivider)`
  ${({ theme }) => theme.typography.subtitle1}
  color: ${({ theme }) => theme.palette.grey[50]};

  &:before {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }

  &:after {
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

const CustomColorWrapper = styled(Stack)`
  margin-top: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(1)};
`;

const CustomColorInput = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
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
