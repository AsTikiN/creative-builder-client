import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
          {icon} {title}
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
  color: #5c5c5c;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0;
  }
`;

const Summary = styled(AccordionSummary)`
  padding: 6px 8px;
  min-height: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  .MuiAccordionSummary-content {
    margin: 0;

    &.Mui-expanded {
      margin: 0;
    }
  }

  &.Mui-expanded {
    min-height: auto;
  }
`;

const StyledTabs = styled(Tabs)`
  overflow: visible;

  & .MuiTabs-indicator {
    left: 0;
    right: auto;
    background-color: #0d0d0d;
    border-radius: 2px;
  }

  & .MuiTabs-scroller {
    overflow: visible !important;
  }

  & .MuiTab-root {
    position: relative;
    overflow: visible;
    color: #5c5c5c;

    &::before {
      content: "";
      //TODO: move to theme
      border-left: 2px solid rgba(166, 166, 166, 0.16);
      height: calc(100% + 4px);
      position: absolute;
      top: -4px;
      left: 0;
      bottom: 0;
    }

    &:first-child:before {
      border-radius: 2px 2px 0 0;
      height: calc(100% + 5px);
      top: -5px;
    }

    &:last-child:before {
      border-radius: 0 0 2px 2px;
      height: calc(100% + 9px);
      top: -4px;
    }
  }

  .MuiTabs-flexContainer {
    gap: 4px;
  }
`;

const StyledTab = styled(Tab)`
  align-items: flex-start;
  text-align: left;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: 6px 20px;
  min-height: auto;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-transform: none;
`;

const Details = styled(AccordionDetails)`
  padding: 0;
  padding-left: 16px;
  margin-top: 4px;
`;

const SummaryText = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;
