import { Color } from "@components/Color";
import { Stack, styled } from "@mui/material";
import { MouseEventHandler } from "react";

export interface SelectColor {
  id: number;
  color: string;
  selected: boolean;
}

interface ColorsSelectProps {
  colors: SelectColor[];
  handleColorClick: (color: SelectColor) => MouseEventHandler<HTMLDivElement>;
  initialColor: string;
}

export const ColorsSelect = ({
  colors,
  handleColorClick,
  initialColor,
}: ColorsSelectProps) => {
  return (
    <Colors>
      {colors.map((color) => (
        <Color
          key={color.id}
          selected={color.selected}
          initialColor={initialColor}
          color={color.color}
          onClick={handleColorClick(color)}
        />
      ))}
    </Colors>
  );
};

const Colors = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  /* margin: ${({ theme }) => theme.spacing(4)} 0; */
`;
