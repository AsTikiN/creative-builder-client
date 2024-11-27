import { Skeleton as MuiSkeleton, styled } from "@mui/material";

export const Skeleton = styled(MuiSkeleton)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;
