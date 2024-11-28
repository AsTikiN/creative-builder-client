import { CopyIcon } from "@/icons/CopyIcon";
import { EditIcon } from "@/icons/EditIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { CardLayout } from "@/layouts/CardLayout";
import { DropdownOption } from "@components/Dropdown";
import { StatusChipProps } from "@components/StatusChip";
import { styled, Typography, useTheme } from "@mui/material";
import { AppDto } from "@store/api/baseApi";
import { FC, MouseEventHandler, useState } from "react";
import { format } from "date-fns";
interface AppCardProps extends AppDto {
  statusChipProps?: StatusChipProps;
  onClick?: MouseEventHandler<HTMLDivElement>;
  handleCloneApp: () => void;
  handleDeleteApp: () => void;
}

export const AppCard: FC<AppCardProps> = ({
  title,
  creationDate,
  statusChipProps,
  onClick,
  handleCloneApp,
  handleDeleteApp,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const theme = useTheme();

  return (
    <CardLayout
      // coverImage={undefined}
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
          onClick: handleCloneApp,
        },
        {
          id: 3,
          label: "Rename",
          value: "Rename",
          icon: <EditIcon />,
        },
        {
          id: 4,
          label: "Delete app",
          value: "Delete app",
          icon: <TrashIcon />,
          color: "error",
          hasDivider: true,
          onClick: handleDeleteApp,
        },
      ]}
      variant="book"
      statusChipProps={statusChipProps}
      onClick={onClick}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    >
      <BookTitle variant="h5" color={theme.palette.grey[400]}>
        {title}
      </BookTitle>
      <Typography variant="body2" color={theme.palette.grey[50]}>
        {format(new Date(creationDate), "MMM d, yyyy 'at' h:mm a")}
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
