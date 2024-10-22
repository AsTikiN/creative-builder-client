import { CrossSmallIcon } from "@/icons/CrossSmallIcon";
import { Button } from "@components/Button";
import { Modal, styled, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  onNext?: () => void;
  onCancel?: () => void;
  children: ReactNode;
}

export const ModalLayout: FC<Props> = ({
  open,
  handleClose,
  children,
  onNext,
  onCancel,
}) => {
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrapper>
        <TopSection>
          <Typography variant="body1" color="grey.400">
            Add book elements
          </Typography>
          <CloseWrapper onClick={handleClose}>
            <CrossSmallIcon />
          </CloseWrapper>
        </TopSection>
        <ModalContent>{children}</ModalContent>
        <Actions>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onNext}>
            Add to book
          </Button>
        </Actions>
      </Wrapper>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 16px;
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  outline: none;
  max-height: 360px;
`;

const TopSection = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  height: 52px;
`;

const ModalContent = styled("div")`
  display: flex;
  padding: ${({ theme }) => theme.spacing(4)};
  overflow-y: auto;
`;

const Actions = styled("div")`
  display: flex;
  padding: ${({ theme }) => theme.spacing(4)};
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
  border-top: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  height: 64px;
`;

const CloseWrapper = styled("div")`
  cursor: pointer;
  display: flex;
`;
