import { Input } from "@components/Input";
import { Stack, styled } from "@mui/material";

export const IntegrationsPage = () => {
  return (
    <>
      <Actions>
        <Input />

        {/* <Dropdown /> */}
      </Actions>
    </>
  );
};
const Actions = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
`;
