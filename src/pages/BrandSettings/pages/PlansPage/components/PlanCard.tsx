import { CircleOutlinedCheckIcon } from "@/icons/CircleOutlinedCheckIcon";
import { Button } from "@components/Button";
import { css, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";

interface Benefit {
  id: string;
  title: string;
}

interface Props {
  isActive?: boolean;
  title: string;
  price: string;
  description: string;
  benefits: Benefit[];
}

export const PlanCard: FC<Props> = ({
  isActive,
  title,
  price,
  description,
  benefits,
}) => {
  return (
    <Wrapper isActive={isActive}>
      <PlanInfo>
        <Typography variant="h5" color="grey.400">
          {title}
        </Typography>
        <Typography variant="planTitle" color="grey.400">
          ${price}
        </Typography>
        <Typography variant="body2" color="grey.200">
          {description}
        </Typography>
      </PlanInfo>

      <PlanBenefitsWrapper>
        <Button variant={isActive ? "outlined" : "contained"}>
          {isActive ? "Current Plan" : "Upgrade"}
        </Button>

        <PlanBenefitsList>
          {benefits.map((benefit) => (
            <PlanBenefitItem key={benefit.id}>
              <CircleOutlinedCheckIcon />
              <Typography variant="body2" color="grey.200">
                {benefit.title}
              </Typography>
            </PlanBenefitItem>
          ))}
        </PlanBenefitsList>
      </PlanBenefitsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)<{ isActive?: boolean }>`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(3)};
  width: 200px;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      box-shadow:
        0px 24px 24px -8px #0d0d0d08,
        0px 10px 10px -5px #0d0d0d08,
        0px 5px 5px -2.5px #0d0d0d08,
        0px 3px 3px -1.5px #0d0d0d0a,
        0px 2px 2px -1px #0d0d0d0a,
        0px 1px 1px -0.5px #0d0d0d08,
        0px 0px 0px 0.5px #002a570f,
        0px 0px 0.5px 0px #0d0d0d66;
      background-color: ${theme.palette.background.primary};
    `}
`;

const PlanInfo = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const PlanBenefitsWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  // Maintain 8px padding-top to account for 4px gap between sections
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
`;

const PlanBenefitsList = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const PlanBenefitItem = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;
