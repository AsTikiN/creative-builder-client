import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const UploadArea = styled(Box)`
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(3)};
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
`;

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
      {/* <label htmlFor="raised-button-file">
        <CloudUploadIcon fontSize="large" color="primary" />
        <Typography variant="h6" color="primary" gutterBottom>
          Upload Files
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Drag and drop files here or click to browse
        </Typography>
      </label> */}
    </UploadArea>
  );
};
