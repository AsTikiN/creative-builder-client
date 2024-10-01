import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { Button } from "@components/Button";
import { BasicSelect } from "@components/Select";
import { alpha, Stack, styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const theme = useTheme();

  const [open, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderData>
        <Typography variant="h3" component="p" color={theme.palette.grey[400]}>
          Apps
        </Typography>
        <Typography variant="h5" component="p" color={theme.palette.grey[200]}>
          Create and customize apps for your offers.
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
          New offer
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
