import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LinkIcon } from "@/icons/LinkIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { CardLayout } from "@/layouts/CardLayout";
import { StatusChipProps } from "@components/StatusChip";
import { Stack, styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface FunnelCardProps {
  title: string;
  date: string;
  coverImage?: string;
  statusChipProps: StatusChipProps;
}

export const FunnelCard: FC<FunnelCardProps> = ({
  title,
  date,
  coverImage,
  statusChipProps,
}) => {
  const theme = useTheme();

  return (
    <CardLayout
      coverImage={coverImage}
      dropdownOptions={[
        {
          id: 0,
          label: "Funnel link",
          value: "Funnel link",
          icon: <LinkIcon />,
        },
        {
          id: 1,
          label: "Edit mockup",
          value: "Edit mockup",
          icon: <ImageIcon />,
        },
        {
          id: 2,
          label: "Duplicate",
          value: "Duplicate",
          icon: <CopyIcon />,
        },
        {
          id: 3,
          label: "Rename",
          value: "Rename",
          icon: <EditIcon />,
        },
        {
          id: 4,
          label: "Delete funnel",
          value: "Delete offer",
          icon: <TrashIcon />,
          color: "error",
          hasDivider: true,
        },
      ]}
      variant="funnel"
      statusChipProps={statusChipProps}
    >
      <BookTitle variant="h5" color={theme.palette.grey[400]}>
        {title}
      </BookTitle>
      <Typography variant="body2" color={theme.palette.grey[50]}>
        {date}
      </Typography>
      <CardInfo>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Revenue
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            $293,394,329
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Total Traffic
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            230,124,293
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Conversion Rate
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            25.30%
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            AOV
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            $26.46
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Time in Funnel
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            4m 34s
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Upsell Rate
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            89.32%
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Downsell Rate
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            3.42%
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Steps
          </Typography>
          <Typography variant="h5" color={theme.palette.grey[400]}>
            10
          </Typography>
        </CardInfoSection>
      </CardInfo>
    </CardLayout>
  );
};

const BookTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
`;

const CardInfo = styled("div")`
  background-image: linear-gradient(to right, #e0e0e0 50%, transparent 50%);
  background-size: 4px 1px;
  background-repeat: repeat-x;

  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  margin-top: 12px;
`;

const CardInfoSection = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  flex: 0 0 25%;

  &:not(:nth-last-child(-n + 3)) {
    padding-bottom: 12px;
  }
`;
