import { ToggleButton } from "@components/ToggleButton";
import { Stack, styled, Typography } from "@mui/material";
import { PlanCard } from "./components/PlanCard";

export const PlansPage = () => {
  return (
    <>
      <Container>
        <PlansActionsPanel>
          <Typography color="grey.400" variant="h5">
            Compare plans
          </Typography>
          <ToggleWrapper>
            <Typography color="grey.200" variant="h6">
              Billing period
            </Typography>
            <ToggleButton />
          </ToggleWrapper>
        </PlansActionsPanel>
        <PlansList>
          <PlanCard
            isActive
            title="Side Hustle"
            price="29"
            description="per month, billed monthly"
            benefits={[
              {
                id: "1",
                title: "3% transaction fee",
              },
              {
                id: "2",
                title: "2 team members",
              },
              {
                id: "3",
                title: "20 apps",
              },
              {
                id: "4",
                title: "10 offers",
              },
              {
                id: "5",
                title: "4 funnels",
              },
            ]}
          />
          <PlanCard
            title="Business"
            price="79"
            description="per month, billed monthly"
            benefits={[
              {
                id: "1",
                title: "1.5% transaction fee",
              },
              {
                id: "2",
                title: "10 team members",
              },
              {
                id: "3",
                title: "100 apps",
              },
              {
                id: "4",
                title: "50 offers",
              },
              {
                id: "5",
                title: "20 funnels",
              },
            ]}
          />
          <PlanCard
            title="Enterprise"
            price="149"
            description="per month, billed monthly"
            benefits={[
              {
                id: "1",
                title: "0% transaction fee",
              },
              {
                id: "2",
                title: "Unlimited team members",
              },
              {
                id: "3",
                title: "Unlimited apps",
              },
              {
                id: "4",
                title: "Unlimited offers",
              },
              {
                id: "5",
                title: "Unlimited funnels",
              },
            ]}
          />
        </PlansList>
      </Container>
    </>
  );
};

const Container = styled(Stack)`
  max-width: 616px;
`;

const PlansActionsPanel = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const ToggleWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const PlansList = styled(Stack)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.palette.grey[500]};
`;
