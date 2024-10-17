import { ButtonPlusIcon } from "@/icons/ButtonPlusIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { ShortcutIcon } from "@/icons/ShortCutIcon";
import AccountSidebarLayout from "@/layouts/AccountSidebarLayout";
import { TableLayout } from "@/layouts/TableLayout";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { styled, Stack, Typography } from "@mui/material";

export const MembersPage = () => {
  return (
    <AccountSidebarLayout
      headerProps={{
        title: "Members",
        description: "Add, remove, or update your team members",
      }}
    >
      <TableActionsPanel>
        <Typography color="grey.400" variant="h6">
          1 active member
        </Typography>
        <Actions>
          <Input
            placeholder="Search..."
            slotProps={{
              input: {
                startAdornment: <SearchIcon />,
                endAdornment: <ShortcutIcon />,
              },
            }}
          />

          <Button variant="contained" startIcon={<ButtonPlusIcon />}>
            Add member
          </Button>
        </Actions>
      </TableActionsPanel>
      <TableLayout />
    </AccountSidebarLayout>
  );
};

const TableActionsPanel = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Actions = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;
