import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { CardLayout } from "@/layouts/CardLayout";
import { StatusChipProps } from "@components/StatusChip";
import { styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface AppCardProps {
  title: string;
  date: string;
  coverImage?: string;
  statusChipProps?: StatusChipProps;
}

export const AppCard: FC<AppCardProps> = ({
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
      variant="book"
      statusChipProps={statusChipProps}
    >
      <BookTitle variant="h5" color={theme.palette.grey[400]}>
        {title}
      </BookTitle>
      <Typography variant="body2" color={theme.palette.grey[50]}>
        {date}
      </Typography>
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
