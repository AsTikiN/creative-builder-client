import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { CardLayout } from "@/layouts/CardLayout";
import { styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface BookCardProps {
  title: string;
  date: string;
  coverImage?: string;
}

export const BookCard: FC<BookCardProps> = ({ title, date, coverImage }) => {
  const theme = useTheme();

  return (
    <CardLayout
      coverImage={coverImage}
      dropdownOptions={[
        {
          id: 1,
          label: "Preview",
          value: "Preview",
          icon: <ShareIcon />,
        },
        {
          id: 2,
          label: "Edit mockup",
          value: "Edit mockup",
          icon: <ImageIcon />,
        },
        {
          id: 3,
          label: "Duplicate",
          value: "Duplicate",
          icon: <CopyIcon />,
        },
        {
          id: 4,
          label: "Rename",
          value: "Rename",
          icon: <EditIcon />,
        },
        {
          id: 5,
          label: "Delete book",
          value: "Delete book",
          icon: <TrashIcon />,
          color: "error",
        },
      ]}
      variant="book"
    >
      <BookTitle variant="h5" color={theme.palette.grey[400]}>
        {title}
      </BookTitle>
      <Typography variant="h6" color={theme.palette.grey[50]}>
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
