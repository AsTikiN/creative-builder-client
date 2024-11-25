import { Box, css, styled } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronDownSmallIcon } from "@/icons/ChevronDownSmallIcon";
import { HeadingIcon } from "@/icons/HeadingIcon";
import { BulletListIcon } from "@/icons/BulletListIcon";
import { NumericListIcon } from "@/icons/NumericlistIcon";
import { SquareCheckIcon } from "@/icons/SquareCheckIcon";
import { DividerIcon } from "@/icons/DividerIcon";
import { QuoteIcon } from "@/icons/QuoteIcon";
import { DropdownMenu } from "../Dropdown";

interface Props {
  icon: ReactNode;
  onClick: () => void;
  variant?: "text" | "icon";
}

const sections = [
  {
    id: 1,
    title: "Turn into",
    options: [
      {
        label: "Heading 1",
        value: "h1",
        id: 1,
        icon: <HeadingIcon />,
      },
      {
        label: "Heading 2",
        value: "h2",
        id: 2,
        icon: <HeadingIcon />,
      },
      {
        label: "Heading 3",
        value: "h3",
        id: 3,
        icon: <HeadingIcon />,
      },
      {
        label: "Bulleted list",
        value: "bullet",
        id: 4,
        icon: <BulletListIcon />,
      },
      {
        label: "Numbered list",
        value: "ordered",
        id: 5,
        icon: <NumericListIcon />,
      },
      {
        label: "To-do list",
        value: "todo",
        id: 6,
        icon: <SquareCheckIcon />,
      },
      {
        label: "Quote",
        value: "quote",
        id: 7,
        icon: <QuoteIcon />,
      },
      {
        label: "Divider",
        value: "divider",
        id: 8,
        icon: <DividerIcon />,
      },
    ],
  },
];

export const MenuDropdown = ({ icon, onClick, variant = "text" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <Wrapper ref={wrapperRef} variant={variant} onClick={handleClick}>
      {icon}
      <ChevronDownSmallIcon />
      {isOpen && (
        <DropDownWrapper>
          <DropdownMenu width="252px" sections={sections} />
        </DropDownWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ variant: "text" | "icon" }>`
  display: flex;
  position: relative;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.grey[400]};
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }

  ${({ variant, theme }) =>
    variant === "text" &&
    css`
      padding: ${theme.spacing(1, 1.5, 1, 2.5)};
    `}

  ${({ variant, theme }) =>
    variant === "icon" &&
    css`
      padding: ${theme.spacing(1, 1.5)};
    `}
`;

const DropDownWrapper = styled(Box)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
