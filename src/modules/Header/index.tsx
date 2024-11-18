import { alpha, Breadcrumbs, Stack, styled } from "@mui/material";
import { FC, ReactNode } from "react";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export interface HeaderProps {
  title: string;
  description: string;
  variant?: "small" | "large";
  actions?: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  // title,
  // description,
  // variant = "large",
  actions,
}) => {
  const breadcrumbs = useBreadcrumbs();

  // const theme = useTheme();
  // const variantProps = {
  //   large: {
  //     titleVariant: "h3" as const,
  //     descriptionVariant: "h5" as const,
  //   },
  //   small: {
  //     titleVariant: "titleLarge" as const,
  //     descriptionVariant: "h5" as const,
  //   },
  // };

  return (
    <Wrapper>
      <HeaderData>
        {/* <Typography
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
        </Typography> */}
        <CustomBreadcrumbs>
          {breadcrumbs.map((breadcrumb) => breadcrumb.breadcrumb)}
        </CustomBreadcrumbs>
      </HeaderData>

      <HeaderActions>{actions}</HeaderActions>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding: ${({ theme }) => theme.spacing(3)};
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

const CustomBreadcrumbs = styled(Breadcrumbs)`
  padding-left: ${({ theme }) => theme.spacing(2)};

  & .MuiBreadcrumbs-separator {
    margin: 0 ${({ theme }) => theme.spacing(3.25)};
    color: ${({ theme }) => theme.palette.grey[700]};
  }

  //& .MuiBreadcrumbs-li {
  //  cursor: pointer;
  //}
`;
