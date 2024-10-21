import { FC } from "react";
import { styled, Typography, useTheme } from "@mui/material";

type ChipStatus = "success" | "error";

export interface StatusChipProps {
  label: string;
  status: ChipStatus;
}

export const StatusChip: FC<StatusChipProps> = ({ label, status }) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <StatusCircle status={status} />
      <Typography variant="h6" color={theme.palette.grey[200]}>
        {label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1, 2, 1, 2.25)};
`;

const StatusCircle = styled("div")<{ status: ChipStatus }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    status === "success"
      ? theme.palette.success.main
      : theme.palette.error.main};
`;
