import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CloudSimpleUploadIcon } from "@/icons/CloudSimpleUpload";

export const Upload = () => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    console.log(event.target.files);
  };

  return (
    <UploadArea>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleUpload}
      />
      <CloudSimpleUploadIcon />
      <UploadText>
        <Typography variant="body1" color="grey.400">
          Choose a file or drag & drop it here.
        </Typography>
        <CustomText variant="body2" color="grey.200">
          JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
        </CustomText>
      </UploadText>
    </UploadArea>
  );
};

const UploadArea = styled(Box)`
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(3, 3, 3, 3)};
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
`;

const UploadText = styled(Stack)`
  margin-top: ${({ theme }) => theme.spacing(3.5)};
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

const CustomText = styled(Typography)`
  letter-spacing: -0.03em;
`;
