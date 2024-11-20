import { Box, Stack, styled, Typography } from "@mui/material";
import { ReactNode } from "react";

interface DropdownOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  id: string | number;
}

interface DropdownSection {
  id: string | number;
  title: string;
  options: DropdownOption[];
}

interface DropdownMenuProps {
  sections: DropdownSection[];
  width?: string;
  topSection?: ReactNode;
  size?: "small" | "medium";
}

export const DropdownMenu = ({
  sections,
  width,
  topSection,
  size = "small",
}: DropdownMenuProps) => {
  return (
    <Wrapper width={width} size={size}>
      {topSection}
      {sections.map((section) => (
        <Section key={section.id}>
          <SectionTitle variant="h6" color="grey.50">
            {section.title}
          </SectionTitle>
          {section.options.map((option) => (
            <Option key={option.id}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconWrapper>{option.icon}</IconWrapper>
                <Typography color="grey.400" variant="body1">
                  {option.label}
                </Typography>
              </Stack>
            </Option>
          ))}
        </Section>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Stack)<{ width?: string; size?: "small" | "medium" }>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  box-shadow:
    0px 24px 24px -8px #0d0d0d08,
    0px 10px 10px -5px #0d0d0d08,
    0px 5px 5px -2.5px #0d0d0d08,
    0px 3px 3px -1.5px #0d0d0d0a,
    0px 2px 2px -1px #0d0d0d0a,
    0px 1px 1px -0.5px #0d0d0d08,
    0px 0px 0px 0.5px #002a570f,
    0px 0px 0.5px 0px #0d0d0d66;
  padding: ${({ theme, size }) => theme.spacing(size === "small" ? 1 : 3)};
  width: ${({ width }) => width || "auto"};
  min-width: 200px;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Section = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const SectionTitle = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const Option = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1.75, 2)};
  border: 0.5px solid transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[500]};
    border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  }
`;

const IconWrapper = styled(Stack)`
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;
