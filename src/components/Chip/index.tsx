import { Chip as MUIChip, ChipProps, css } from "@mui/material";
import { styled } from "@mui/system";

interface CustomChipProps extends ChipProps {
  customVariant: "default" | "success" | "primary";
  customSize?: "xs" | "sm";
  customRadius?: "xs" | "sm";
}

const Chip = ({
  label = "primary",
  customRadius = "xs",
  customSize = "xs",
  customVariant,
  ...props
}: CustomChipProps) => {
  return (
    <StyledChip
      label={label}
      customSize={customSize}
      customRadius={customRadius}
      customVariant={customVariant}
      {...props}
    />
  );
};

const StyledChip = styled(MUIChip)<CustomChipProps>`
  // default style
  ${(props) => css`
    ${props.theme.typography.subtitle1};
    height: auto;
    span {
      padding: 0;
    }
  `}

  // custom custom radius
  ${(props) =>
    props.customRadius === "xs" &&
    css`
      border-radius: 4px;
    `}
  ${(props) =>
    props.customRadius === "sm" &&
    css`
      border-radius: 8px;
    `}
  
  // custom custom size
  ${(props) =>
    props.customRadius === "xs" &&
    css`
      padding: 2px 6px;
    `}
  ${(props) =>
    props.customRadius === "sm" &&
    css`
      padding: 4px 6px;
    `}
  
  // custom variants
  ${(props) =>
    props.customVariant === "success" &&
    css`
      border: 0.5px solid #c2f5da;
      background-color: ${props.theme.palette.success.light};
      color: ${props.theme.palette.success.main};
    `}
  ${(props) =>
    props.customVariant === "primary" &&
    css`
      border: 0.5px solid #a4d0fe;
      background-color: #e5f1fe;
      color: ${props.theme.palette.primary.main};
      padding: 2px 6px;
    `}
`;

export default Chip;
