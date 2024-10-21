import { ChevronDownSmallIcon } from "@/icons/ChevronDownSmallIcon";
import { Box, css, styled } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  onClick: () => void;
  variant?: "text" | "icon";
}

export const MenuDropdown = ({ icon, onClick, variant = "text" }: Props) => {
  return (
    <Wrapper variant={variant} onClick={onClick}>
      {icon}
      <ChevronDownSmallIcon />
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ variant: "text" | "icon" }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === "text" &&
    css`
      padding: ${theme.spacing(1, 1.5, 1, 2.5)};
    `}

  ${({ variant, theme }) =>
    variant === "icon" &&
    css`
      padding: ${theme.spacing(1, 1.5)};
    `}
`;
