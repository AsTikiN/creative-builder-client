import { Box, Stack, styled, Typography } from "@mui/material";

import { Input } from "@components/Input";

import { useState } from "react";
import { TextedDivider } from "@components/Divider/TextedDivider";
import { ColorsSelect, SelectColor } from "@components/ColorsSelect";
import { Color } from "@components/Color";

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
  const [colors, setColors] = useState(initialColors);
  const [customColor, setCustomColor] = useState("#007CFE");

  const handleColorClick = (clickedColor: SelectColor) => () => {
    setColors(
      colors.map((color) =>
        color.id === clickedColor.id
          ? { ...color, selected: true }
          : { ...color, selected: false }
      )
    );
    setCustomColor(
      colors.find((color) => color.id === clickedColor.id)?.color ||
        initialColors[0].color
    );
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
            <ColorsSelect
              colors={colors}
              handleColorClick={handleColorClick}
              initialColor={initialColors[0].color}
            />
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

const Colors = styled(Box)`
  margin: ${({ theme }) => theme.spacing(4)} 0;
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
