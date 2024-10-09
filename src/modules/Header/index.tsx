import { LayoutTopIcon } from "@/icons/LayoutTopIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SmallPlusIcon } from "@/icons/SmallPlusIcon";
import { Button } from "@components/Button";
import { MultipleSelect } from "@components/MultipleSelect";
import { alpha, Stack, styled, Typography, useTheme } from "@mui/material";
import { FC, ReactNode, useState } from "react";

export interface HeaderProps {
  title: string;
  description: string;
  variant?: "small" | "large";
  actions?: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  title,
  description,
  variant = "large",
  actions,
}) => {
  const theme = useTheme();
  const variantProps = {
    large: {
      titleVariant: "h3" as const,
      descriptionVariant: "h5" as const,
    },
    small: {
      titleVariant: "titleLarge" as const,
      descriptionVariant: "h6" as const,
    },
  };

  const [open, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderData>
        <Typography
          variant={variantProps[variant].titleVariant}
          component="p"
          color={theme.palette.grey[400]}
        >
          {title}
        </Typography>
        <Typography
          variant={variantProps[variant].descriptionVariant}
          component="p"
          color={theme.palette.grey[200]}
        >
          {description}
        </Typography>
      </HeaderData>

      <HeaderActions>{actions}</HeaderActions>
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
