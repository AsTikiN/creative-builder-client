import { DotsIcon } from "@/icons/DotsIcon";
import { StatusChip } from "@components/StatusChip";
import { alpha, Stack, styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface AppCardProps {
  title: string;
  date: string;
  coverImage?: string;
}

export const AppCard: FC<AppCardProps> = ({ title, date, coverImage }) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <CoverImageWrapper>
        {coverImage ? (
          <ImageContainer>
            <Image src={coverImage} alt={title} />
          </ImageContainer>
        ) : (
          <MockImage />
        )}
        <ActionPanel className="action-panel">
          <StatusChip label="Active" status="success" />

          <DotsWrapper>
            <DotsIcon />
          </DotsWrapper>
        </ActionPanel>
      </CoverImageWrapper>
      <Data>
        <BookTitle variant="h5" color={theme.palette.grey[400]}>
          {title}
        </BookTitle>
        <Typography variant="h6" color={theme.palette.grey[50]}>
          {date}
        </Typography>
      </Data>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
  max-width: 250px;
  width: fill-available;
  cursor: pointer;
`;

const CoverImageWrapper = styled("div")`
  border-bottom: 0.5px solid
    ${({ theme }) => alpha(theme.palette.grey[200], 0.1)};
  background-color: ${({ theme }) => theme.palette.grey[500]};
  display: flex;
  justify-content: center;
  padding: 24px;
  position: relative;

  &:hover .action-panel {
    opacity: 1;
  }
`;

const Data = styled(Stack)`
  padding: 8px 12px;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const BookTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
`;

const MockImage = styled("div")`
  width: 112px;
  height: 164px;
  border-radius: 4px;
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;
  background: linear-gradient(
    225deg,
    ${({ theme }) => alpha(theme.palette.grey[600], 1)} 0%,
    ${({ theme }) => alpha(theme.palette.grey[600], 0)} 78%
  );

  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.24)};
`;

const ActionPanel = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px
    ${({ theme }) => theme.shape.borderRadius}px 0 0;
  opacity: 0;
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
