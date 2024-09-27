import { Stack, styled, Typography } from "@mui/material";

export const Banner = () => (
  <Banner.Wrapper>
    <Banner.Logo src="/vite.svg" />
    <Stack alignItems="center" spacing={1}>
      <Typography variant="h5" textAlign="center">
        Vite Template
      </Typography>
      <Typography variant="body1" color="GrayText" textAlign="center">
        Kickstart your project with our template
      </Typography>
    </Stack>
  </Banner.Wrapper>
);

Banner.Logo = styled("img")`
  width: 5rem;
`;

Banner.Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(8)};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
`;
