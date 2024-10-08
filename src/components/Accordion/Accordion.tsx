import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";

interface TabItem {
  id: number;
  label: string;
}

export interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  tabs: TabItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ title, icon }) => {
  return (
    <AccordionWrapper>
      <Summary
        expandIcon={<ExpandIcon className="expand-icon" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <SummaryText>
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

const AccordionWrapper = styled(MuiAccordion)`
  box-shadow: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  margin: 10px;
  max-width: 408px;
  cursor: pointer;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 10px !important;
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const Summary = styled(AccordionSummary)`
  padding: 12px;
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

    .expand-icon {
      &:after {
        display: none;
      }
    }
  }
`;

const Details = styled(AccordionDetails)`
  padding: 0 40px 12px;
`;

const SummaryText = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ExpandIcon = styled("div")`
  height: 20px;
  width: 20px;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 12px;
    width: 2px;
    background-color: ${({ theme }) => theme.palette.grey[200]};
    border-radius: 2px;
  }

  &:before {
    transform: rotate(90deg);
    left: 10px;
    top: 4px;
  }

  &:after {
    transform: rotate(0deg);
    left: 10px;
    top: 4px;
  }
`;
