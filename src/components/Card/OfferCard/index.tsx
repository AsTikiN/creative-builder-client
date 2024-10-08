import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { CardLayout } from "@/layouts/CardLayout";
import { StatusChipProps } from "@components/StatusChip";
import { Stack, styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface OfferCardProps {
  title: string;
  date: string;
  coverImage?: string;
  statusChipProps?: StatusChipProps;
}

export const OfferCard: FC<OfferCardProps> = ({
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
          id: 1,
          label: "Edit thumbnail",
          value: "Edit thumbnail",
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
          label: "Delete offer",
          value: "Delete offer",
          icon: <TrashIcon />,
          color: "error",
          hasDivider: true,
        },
      ]}
      variant="offer"
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
          <Typography variant="h6" color={theme.palette.grey[400]}>
            $100,394,329
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Customers
          </Typography>
          <Typography variant="h6" color={theme.palette.grey[400]}>
            124,293
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            Apps
          </Typography>
          <Typography variant="h6" color={theme.palette.grey[400]}>
            5
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            CSAT
          </Typography>
          <Typography variant="h6" color={theme.palette.grey[400]}>
            4.5/5
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            NPS
          </Typography>
          <Typography variant="h6" color={theme.palette.grey[400]}>
            89
          </Typography>
        </CardInfoSection>
        <CardInfoSection>
          <Typography variant="body2" color={theme.palette.grey[50]}>
            CES
          </Typography>
          <Typography variant="h6" color={theme.palette.grey[400]}>
            3.4
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
  flex: 0 0 33.33%;

  &:not(:nth-last-child(-n + 3)) {
    padding-bottom: 12px;
  }
`;
