import { FC } from "react";
import { alpha, styled, Typography, useTheme } from "@mui/material";

interface Props {
  label: string;
}

export const StatusChip: FC<Props> = ({ label }) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <StatusCircle />
      <Typography variant="h6" color={theme.palette.grey[200]}>
        {label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 4px 8px 4px 9px;
`;

const StatusCircle = styled("div")`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.success.main};
`;
