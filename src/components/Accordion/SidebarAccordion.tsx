import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  css,
  styled,
  Tab,
  Tabs,
} from "@mui/material";
import { useState } from "react";

interface TabItem {
  id: number;
  label: string;
}

export interface SidebarAccordionProps {
  title: string;
  icon: React.ReactNode;
  tabs: TabItem[];
}

export const SidebarAccordion: React.FC<SidebarAccordionProps> = ({
  title,
  icon,
  tabs,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AccordionWrapper>
      <Summary
        expandIcon={<ChevronDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <SummaryText>
          <div className="main-icon">{icon}</div> {title}
        </SummaryText>
      </Summary>
      <Details>
        <StyledTabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          {tabs.map((tab, index) => (
            <StyledTab key={index} label={tab.label} />
          ))}
        </StyledTabs>
      </Details>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled(Accordion)`
  box-shadow: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  position: relative;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow:
        0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;
      width: 100%;
      height: 32px;
      border-radius: 8px;
      opacity: 1;
      background-color: transparent;
    }
  }
`;

const Summary = styled(AccordionSummary)`
  padding: 6px 8px;
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
    position: relative;
    top: -1px;
  }

  &.Mui-expanded {
    min-height: auto;
    color: ${({ theme }) => theme.palette.grey[400]};

    .main-icon svg path {
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  }
`;

const StyledTabs = styled(Tabs)`
  overflow: visible;

  & .MuiTabs-indicator {
    left: 0;
    right: auto;
    background-color: ${({ theme }) => theme.palette.grey[400]};
    border-radius: 2px;
    height: 22px !important;
    transform: translateY(6px);
  }

  & .MuiTabs-scroller {
    overflow: visible !important;
  }

  & .MuiTab-root {
    position: relative;
    overflow: visible;
    color: ${({ theme }) => theme.palette.grey[200]};

    &.Mui-selected {
      color: ${({ theme }) => theme.palette.grey[400]};
    }

    &::before {
      content: "";
      background-color: ${({ theme }) => alpha(theme.palette.grey[50], 0.16)};
      height: calc(100% + 4px);
      width: 2px;
      position: absolute;
      top: 1px;
      left: 0;
      bottom: 0;
    }

    &:first-child:before {
      border-radius: 2px 2px 0 0;
      height: calc(100% + 4px);
      top: 1px;
    }

    &:last-child:before {
      border-radius: 0 0 2px 2px;
      height: calc(100% + 1px);
      top: 1px;
    }
  }

  .MuiTabs-flexContainer {
    gap: 4px;
  }
`;

const StyledTab = styled(Tab)`
  ${({ theme }) => css`
    ${theme.typography.titleSmall}
  `}

  align-items: flex-start;
  text-align: left;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: 6px 20px;
  min-height: auto;
  white-space: nowrap;
  text-transform: none;
`;

const Details = styled(AccordionDetails)`
  padding: 0;
  padding-left: 17px;
  margin-top: 4px;
`;

const SummaryText = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
