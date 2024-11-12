import { ButtonPlusIcon } from "@/icons/ButtonPlusIcon";
import { TableLayout } from "@/layouts/TableLayout";
import { Button } from "@components/Button";
import { ToggleButton } from "@components/ToggleButton";
import { styled, Stack, Box } from "@mui/material";

export const MembersPage = () => {
  return (
    <>
      <TableActionsPanel>
        <ToggleButton
          options={[
            {
              content: <ToggleOptionWrapper>Humans</ToggleOptionWrapper>,
              value: "humans",
            },
            {
              content: <ToggleOptionWrapper>AI Agents</ToggleOptionWrapper>,
              value: "ai-agents",
            },
          ]}
        />
        <Actions>
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

const ToggleOptionWrapper = styled(Box)`
  width: 156px;
`;
