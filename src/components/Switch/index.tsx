import { Switch as CustomSwitch, SwitchProps, Theme } from "@mui/material";
import { styled, css } from "@mui/material/styles";

interface CustomSwitchProps extends SwitchProps {
  checked?: boolean;
}

export const Switch = ({ checked, ...props }: CustomSwitchProps) => {
  return <StyledSwitch checked={checked} {...props} />;
};

const dynamicSwitchStyle = ({ theme }: { theme: Theme }) => css`
  width: 28px;
  height: 16px;
  padding: 0;
  display: flex;

  &:active {
    & .MuiSwitch-thumb {
      width: 15px;
    }

    & .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(9px);
    }
  }

  & .MuiSwitch-switchBase {
    padding: 2px;

    &.Mui-checked {
      transform: translateX(12px);
      color: #fff;

      & + .MuiSwitch-track {
        opacity: 1;
        background-color: ${theme.palette.primary.main};
      }
    }
  }

  & .MuiSwitch-thumb {
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    border: 1px solid;

    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: 0.2s;
  }

  & .MuiSwitch-track {
    border-radius: 8px;
    opacity: 1;
    border: 0.5px solid rgba(36, 36, 36, 0.1);
    background-color: ${theme.palette.grey[100]};
    box-sizing: border-box;
  }
`;

export const StyledSwitch = styled(CustomSwitch)(dynamicSwitchStyle);
