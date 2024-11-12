import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  css,
  Stack,
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
  isFilled?: boolean;
}

export const SidebarAccordion: React.FC<SidebarAccordionProps> = ({
  title,
  icon,
  tabs,
  isFilled,
}) => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const hasSelected = value !== null;

  return (
    <AccordionWrapper hasSelected={hasSelected}>
      <Summary
        expandIcon={<ChevronDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        hasSelected={hasSelected}
        isFilled={isFilled}
      >
        <SummaryText>
          <Stack className="main-icon">{icon}</Stack> {title}
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

const AccordionWrapper = styled(Accordion)<{ hasSelected: boolean }>`
  box-shadow: none;
  color: ${({ theme }) => theme.palette.grey[200]};
  position: relative;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0;

    ${({ hasSelected }) =>
      hasSelected &&
      css`
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
      `}
  }
`;

const Summary = styled(AccordionSummary)<{
  hasSelected: boolean;
  isFilled?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
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

  &.Mui-expanded {
    min-height: auto;

    ${({ theme, hasSelected, isFilled }) =>
      hasSelected &&
      css`
        color: ${theme.palette.grey[400]};

        .main-icon svg path {
          ${isFilled
            ? `fill: ${theme.palette.grey[400]}`
            : `stroke: ${theme.palette.grey[400]}`};
        }
      `}
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

  &:not(:has(.Mui-selected)) {
    .MuiTabs-indicator {
      background-color: transparent;
    }
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
    gap: ${({ theme }) => theme.spacing(1)};
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
  padding: ${({ theme }) => theme.spacing(1.5, 5)};
  min-height: auto;
  white-space: nowrap;
  text-transform: none;
`;

const Details = styled(AccordionDetails)`
  padding: 0;
  padding-left: 17px;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const SummaryText = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
