import { Box, styled } from "@mui/material";

export const IntegrationCard = () => {
  return <Wrapper>IntegrationCard</Wrapper>;
};

const Wrapper = styled(Box)`
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px #0a0d1408;
`;
