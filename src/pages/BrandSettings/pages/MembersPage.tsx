import { styled, Stack } from "@mui/material";
import { ButtonPlusIcon } from "@/icons/ButtonPlusIcon";
import { TableLayout } from "@/layouts/TableLayout";
import { Button } from "@components/Button";
// import { ToggleButton } from "@components/ToggleButton";
import SearchInput from "@modules/SearchInput";

export const MembersPage = () => {
  return (
    <>
      <TableActionsPanel>
        <SearchInput />
        {/*<ToggleButton*/}
        {/*  options={[*/}
        {/*    {*/}
        {/*      content: <ToggleOptionWrapper>Humans</ToggleOptionWrapper>,*/}
        {/*      value: "humans",*/}
        {/*    },*/}
        {/*    {*/}
        {/*      content: <ToggleOptionWrapper>AI Agents</ToggleOptionWrapper>,*/}
        {/*      value: "ai-agents",*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*/>*/}
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
  .MuiBox-root:has(.custom-search-input) {
    max-width: 300px;
  }
`;

const Actions = styled(Stack)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex: 1;
`;

// const ToggleOptionWrapper = styled(Box)`
//   width: 156px;
// `;
