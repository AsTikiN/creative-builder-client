import { Stack, styled, Typography } from "@mui/material";

interface IHeadingBlock {
  title: string;
  subtitle?: string;
  variant?: "small" | "medium";
}

const HeadingBlock = ({
  title,
  subtitle,
  variant = "small",
}: IHeadingBlock) => {
  const customVariant = {
    small: (
      <>
        <Typography variant="h6" color="grey.400">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" color="grey.200">
            {subtitle}
          </Typography>
        )}
      </>
    ),
    medium: (
      <>
        <Typography variant="h5" color="grey.400">
          {title}
        </Typography>
        {subtitle && (
          <Typography fontWeight="400" variant="h6" color="grey.200">
            {subtitle}
          </Typography>
        )}
      </>
    ),
  };
  return <SectionTitleData>{customVariant[variant]}</SectionTitleData>;
};

const SectionTitleData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export default HeadingBlock;
