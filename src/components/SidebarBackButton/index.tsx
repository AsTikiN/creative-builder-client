import { VectorArrowLeft } from "@/icons/VectorArrowLeft";
import { Button } from "@components/Button";
import { styled } from "@mui/material";
import { FC } from "react";

interface Props {
  href: string;
  text: string;
}

export const SidebarBackButton: FC<Props> = ({ href, text }) => {
  return (
    <StyledButton variant="text" startIcon={<VectorArrowLeft />} href={href}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.grey[50]};
  padding: 4px 8px;
  ${({ theme }) => theme.typography.h6};
  border-radius: 4px;

  &:hover {
    background: none;
  }
`;
