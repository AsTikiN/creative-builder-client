import { Box, Popper, Typography, Stack, styled } from "@mui/material";
import { ReactNode, useState, useRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight.tsx";
import { ArrowCornerDownLeft } from "@/icons/ArrowCornerDownLeft.tsx";

interface DropdownSubItemsProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  id: string | number;
  disabled?: boolean;
}

interface DropdownOption extends DropdownSubItemsProps {
  subItems?: DropdownSubItemsProps[];
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
          {section.title && (
            <SectionTitle variant="h6" color="grey.50">
              {section.title}
            </SectionTitle>
          )}
          {section.options.map((option) => (
            <DropdownOptionItem key={option.id} option={option} />
          ))}
        </Section>
      ))}
    </Wrapper>
  );
};

const DropdownOptionItem = ({ option }: { option: DropdownOption }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  return (
    <Option
      ref={anchorRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      disabled={option.disabled}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <OptionStyled>
          <IconWrapper>{option.icon}</IconWrapper>
          <Typography color="grey.400" variant="body1">
            {option.label}
          </Typography>
        </OptionStyled>
        {option.subItems?.length && <ArrowRight />}
      </Stack>
      {option.subItems && (
        <Popper
          disablePortal
          open={open}
          anchorEl={anchorRef.current}
          placement="right-start"
          modifiers={[
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["left-start"],
              },
            },
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ]}
          style={{ zIndex: 1400 }}
        >
          <SubMenu>
            {option.subItems.map((child) => (
              <Option key={child.id}>
                <SubMenuItem>
                  <Typography color="grey.400" variant="body1">
                    {child.label}
                  </Typography>
                  <ArrowCornerDownLeft />
                </SubMenuItem>
              </Option>
            ))}
          </SubMenu>
        </Popper>
      )}
    </Option>
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
  z-index: 100;
`;

const Section = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const SectionTitle = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const OptionStyled = styled(Box)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(1.75, 2)};
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Option = styled(Box)<{ disabled?: boolean }>`
  position: relative;
  z-index: 1;
  border: 0.5px solid transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? "null" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? ".3" : "1")};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? "transparent" : theme.palette.grey[500]};
    border: 0.5px solid
      ${({ theme, disabled }) =>
        disabled ? "transparent" : theme.palette.grey[100]};
  }
`;

const SubMenu = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  position: relative;
  box-shadow:
    0px 24px 24px -8px #0d0d0d08,
    0px 10px 10px -5px #0d0d0d08,
    0px 5px 5px -2.5px #0d0d0d08,
    0px 3px 3px -1.5px #0d0d0d0a,
    0px 2px 2px -1px #0d0d0d0a,
    0px 1px 1px -0.5px #0d0d0d08,
    0px 0px 0px 0.5px #002a570f,
    0px 0px 0.5px 0px #0d0d0d66;
  padding: ${({ theme }) => theme.spacing(1)};
  min-width: 200px;
  left: 5px;
  z-index: 120;
`;

const SubMenuItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1.75, 2)};
  svg {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      visibility 0.3s;
  }

  &:hover {
    svg {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
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
