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
  height: 17px;
  padding: 1px;
  display: flex;
    
  & .MuiSwitch-thumb {
      box-shadow: 0px 0px 0.5px 0px rgba(13, 13, 13, 0.4);
      border: 1px solid #ededed;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: 0.2s;
      position: relative;
    &:before {
        content: '';
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        box-shadow: 0 0 0 .5px ${theme.palette.grey[100]};
        background-color: rgba(36, 36, 36, 0.1);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    },
    &:after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        box-shadow: 0 0 0 .5px transparent;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    },
  }

  & .MuiSwitch-track {
    border-radius: 8px; 
    opacity: 1;
      box-shadow: 0 0 0 .5px rgba(36, 36, 36, 0.25);
    background-color: ${theme.palette.grey[100]};
    box-sizing: border-box;
  }

    & .MuiSwitch-switchBase {
        padding: 2.2px 3px;

        &.Mui-checked {
            transform: translateX(10px);
            color: #fff;
            & .MuiSwitch-thumb {
                
                &:after {
                    background-color: ${theme.palette.primary.main};
                    box-shadow: 0 0 0 .5px #ededed ;
                },
            }

            & + .MuiSwitch-track {
                opacity: 1;
                background-color: ${theme.palette.primary.main};
                box-shadow: 0 0 0 .5px rgba(0, 124, 254, .8);
            }
        }
    }
`;

export const StyledSwitch = styled(CustomSwitch)(dynamicSwitchStyle);
