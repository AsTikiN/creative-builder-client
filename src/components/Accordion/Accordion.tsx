import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
  css,
} from "@mui/material";
import { FC } from "react";
import { CircleCheckIcon } from "@/icons/CIrcleCheckIcon";
import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";

interface TabItem {
  id: number;
  label: string;
}

export interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  tabs: TabItem[];
  disabled?: boolean;
  isFilledIcon?: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  title,
  icon,
  disabled,
  isFilledIcon,
}) => {
  return (
    <AccordionWrapper isDisabled={disabled}>
      <Summary
        expandIcon={
          disabled ? (
            <CircleCheckIcon />
          ) : (
            <>
              <ExpandIconWrapper className="expand-icon-minus">
                <MinusIcon />
              </ExpandIconWrapper>
              <ExpandIconWrapper className="expand-icon-plus">
                <PlusIcon />
              </ExpandIconWrapper>
              {/* <ExpandIcon className="expand-icon" /> */}
            </>
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <SummaryText isDisabled={disabled} isFilledIcon={isFilledIcon}>
          {icon} {title}
        </SummaryText>
      </Summary>
      <Details>
        <Typography variant="body2" color="grey.200">
          An image including the title, author’s name, and sometimes an
          illustration or design.
        </Typography>
      </Details>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled(MuiAccordion)<{ isDisabled?: boolean }>`
  box-shadow: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  max-width: 408px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0;
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`;

const ExpandIconWrapper = styled("div")`
  display: flex;

  &.expand-icon-minus {
    display: none;
  }

  &.expand-icon-plus {
    display: flex;

    svg path {
      stroke: ${({ theme }) => theme.palette.grey[50]};
    }
  }
`;

const Summary = styled(AccordionSummary)`
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(3)}`};
  min-height: auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  .MuiAccordionSummary-content {
    margin: 0;

    &.Mui-expanded {
      margin: 0;
    }
  }

  .MuiAccordionSummary-expandIconWrapper {
    transform: rotate(0deg);
  }

  &.Mui-expanded {
    min-height: auto;

    .expand-icon-minus {
      display: flex;
    }

    .expand-icon-plus {
      display: none;
    }
  }
`;

const Details = styled(AccordionDetails)`
  padding: ${({ theme }) => `0 ${theme.spacing(10)} ${theme.spacing(3)}`};
`;

const SummaryText = styled("div")<{
  isDisabled?: boolean;
  isFilledIcon?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme, isDisabled, isFilledIcon }) =>
    isDisabled &&
    css`
      color: ${theme.palette.grey[700]};

      svg path {
        ${isFilledIcon &&
        css`
          fill: ${theme.palette.grey[700]};
        `}

        ${!isFilledIcon &&
        css`
          stroke: ${theme.palette.grey[700]};
        `}
      }
    `}
`;