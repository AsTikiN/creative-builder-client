import { ResizeIcon } from "@/icons/ResizeIcon";
import {
  alpha,
  styled,
  TextareaAutosize,
  TextareaAutosizeProps,
  Typography,
} from "@mui/material";

export const Textarea = (props: TextareaAutosizeProps) => {
  return (
    <Wrapper>
      <StyledTextarea {...props} />
      <ResizePanel>
        <Typography variant="subtitle1" color="grey.50">
          {props.value?.toString().length}/200
        </Typography>
        <ResizeIcon />
      </ResizePanel>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  position: relative;
`;

const StyledTextarea = styled(TextareaAutosize)`
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  border-radius: 12px;
  box-shadow: 0px 1px 2px 0px ${alpha("#0A0D14", 0.03)};
  padding: 10px 12px 30px;
  width: 100%;
  min-height: calc(156px - 39px);

  resize: vertical;

  &::-webkit-resizer {
    display: block;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[50]};
    ${({ theme }) => theme.typography.label};
  }

  &:focus-visible {
    outline: none;
  }
`;

const ResizePanel = styled("div")`
  position: absolute;
  bottom: 14px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  gap: ${({ theme }) => theme.spacing(1)};
`;
