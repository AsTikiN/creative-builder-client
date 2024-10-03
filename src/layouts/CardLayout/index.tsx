import { DotsIcon } from "@/icons/DotsIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { StatusChip, StatusChipProps } from "@components/StatusChip";
import { alpha, Stack, styled } from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import { MockOfferImage } from "./components/MockOfferImage";
import { MockBookImage } from "./components/MockBookImage";
import { MockFunnelImage } from "./components/MockFunnelImage";

interface CardLayoutProps extends PropsWithChildren {
  coverImage?: string;
  dropdownOptions: DropdownOption[];
  variant?: "book" | "offer" | "funnel";
  statusChipProps: StatusChipProps;
}

export const CardLayout: FC<CardLayoutProps> = ({
  coverImage,
  children,
  dropdownOptions,
  variant = "book",
  statusChipProps,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const mockImages = {
    book: <MockBookImage />,
    offer: <MockOfferImage />,
    funnel: <MockFunnelImage />,
  };

  return (
    <Wrapper>
      <CoverImageWrapper variant={variant}>
        {coverImage ? (
          <ImageContainer>
            <Image src={coverImage} />
          </ImageContainer>
        ) : (
          mockImages[variant]
        )}
        <ActionPanel open={isOpen} className="action-panel">
          <StatusChip {...statusChipProps} />

          <DotsWrapper onClick={() => setIsOpen(!isOpen)}>
            <DotsIcon />
          </DotsWrapper>
          <DropdownAnchor>
            <Dropdown
              dropdownWidth={182}
              options={dropdownOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </DropdownAnchor>
        </ActionPanel>
      </CoverImageWrapper>
      <Data>{children}</Data>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
  width: fill-available;
  cursor: pointer;
`;

const CoverImageWrapper = styled("div")<{
  variant: "book" | "offer" | "funnel";
}>`
  border-bottom: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
  background-color: ${({ theme }) => theme.palette.grey[500]};
  display: flex;
  justify-content: center;
  padding: 24px;
  position: relative;
  height: ${({ variant }) => (variant === "book" ? "212px" : "164px")};

  &:hover .action-panel {
    opacity: 1;
  }
`;

const Data = styled(Stack)`
  padding: 8px 12px;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const ActionPanel = styled("div")<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 8px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px
    ${({ theme }) => theme.shape.borderRadius}px 0 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DotsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  background-color: ${({ theme }) => theme.palette.text.primary};
`;

const ImageContainer = styled("div")`
  width: 112px;
  height: 164px;
  border-radius: 4px;
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DropdownAnchor = styled("div")`
  position: absolute;
  top: 40px;
  right: 40px;
`;
