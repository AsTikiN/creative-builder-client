import { Stack, styled, Typography } from "@mui/material";

interface IHeadingBlock {
  title: string;
  subtitle?: string;
}

const HeadingBlock = ({ title, subtitle }: IHeadingBlock) => {
  return (
    <SectionTitleData>
      <Typography variant="h5" color="grey.400">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="grey.200">
          {subtitle}
        </Typography>
      )}
    </SectionTitleData>
  );
};

const SectionTitleData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export default HeadingBlock;
