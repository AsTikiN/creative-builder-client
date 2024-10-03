import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { Button } from "@components/Button";
import { BasicSelect } from "@components/Select";
import { alpha, Stack, styled, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";

export interface HeaderProps {
  title: string;
  description: string;
  buttonText: string;
}

export const Header: FC<HeaderProps> = ({ title, description, buttonText }) => {
  const theme = useTheme();

  const [open, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderData>
        <Typography variant="h3" component="p" color={theme.palette.grey[400]}>
          {title}
        </Typography>
        <Typography variant="h5" component="p" color={theme.palette.grey[200]}>
          {description}
        </Typography>
      </HeaderData>

      <HeaderActions>
        <BasicSelect
          open={open}
          setIsOpen={setIsOpen}
          options={[
            { value: "display", label: "Display" },
            { value: "hide", label: "Hide" },
          ]}
        />
        <Button startIcon={<SmallPlusIcon />} variant="contained">
          {buttonText}
        </Button>
      </HeaderActions>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
`;

const HeaderData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  flex: 1;
`;

const HeaderActions = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;
