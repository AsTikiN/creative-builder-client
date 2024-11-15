import { Box, BoxProps, css, styled } from "@mui/material";

interface ColumnLayoutProps extends BoxProps {
  variant?: "xs" | "sm";
  firstColumn: React.ReactNode;
  secondColumn: React.ReactNode;
}

const ColumnLayout = ({
  variant = "sm",
  firstColumn,
  secondColumn,
}: ColumnLayoutProps) => {
  return (
    <StyledWrapper variant={variant}>
      {firstColumn}
      {secondColumn}
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)<Pick<ColumnLayoutProps, "variant">>`
  // default style
  display: grid;
  height: fit-content;
  flex-wrap: nowrap;

  // custom variants
  ${(props) =>
    props.variant === "sm" &&
    css`
      grid-template-columns: 424px auto;
    `}
`;

export default ColumnLayout;
