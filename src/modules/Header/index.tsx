import {
  alpha,
  Button,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

export const Header = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <HeaderData>
        <Typography variant="h3" component="p" color={theme.palette.grey[400]}>
          Apps
        </Typography>
        <Typography variant="h5" component="p" color={theme.palette.grey[200]}>
          Create and customize apps for your offers.
        </Typography>
      </HeaderData>

      <HeaderActions>
        <Button variant="contained">New offer</Button>
      </HeaderActions>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
`;

const HeaderData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  flex: 1;
`;

const HeaderActions = styled(Stack)`
  /* flex-direction: row; */
  /* gap: ${({ theme }) => theme.spacing(2)}; */
`;
