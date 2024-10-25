import { ButtonPlusIcon } from "@/icons/ButtonPlusIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { ShortcutIcon } from "@/icons/ShortcutIcon";
import { TableLayout } from "@/layouts/TableLayout";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { styled, Stack, Typography, Box } from "@mui/material";

export const MembersPage = () => {
  return (
    <>
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
                endAdornment: (
                  <ShortcutWrapper>
                    <ShortcutIcon />
                  </ShortcutWrapper>
                ),
              },
            }}
          />

          <Button variant="contained" startIcon={<ButtonPlusIcon />}>
            Add member
          </Button>
        </Actions>
      </TableActionsPanel>
      <TableLayout />
    </>
  );
};

const TableActionsPanel = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Actions = styled(Stack)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex: 1;
`;

const ShortcutWrapper = styled(Box)`
  padding: 2px 6px;
  border-radius: 4px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
