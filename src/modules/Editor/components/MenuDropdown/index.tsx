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
  gap: 2px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "text" &&
    css`
      padding: 4px 6px 4px 10px;
    `}

  ${({ variant }) =>
    variant === "icon" &&
    css`
      padding: 4px 6px;
    `}
`;
