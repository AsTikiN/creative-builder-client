import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Divider } from "@components/Divider/Divider";
import { CopyIcon } from "@/icons/CopyIcon";
import { UnionIcon } from "@/icons/UnionIcon";
import { StopCircleIcon } from "@/icons/StopCircleIcon";
import { DashedCopyIcon } from "@/icons/DashedCopyIcon";
import ColumnLayout from "@/layouts/ColumnLayout";
import HeadingBlock from "@components/HeadingBlock ";

type FormValues = {
  fullName: string;
  username: string;
  description: string;
};

export const GeneralPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      username: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleInputChange =
    (key: keyof FormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(key, e.target.value);
    };

  return (
    <>
      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Logo"
            subtitle=" Upload your brand’s logo."
          />
        }
        secondColumn={
          <UserData>
            <StyledAvatar variant="square">FDS</StyledAvatar>
            <UserDataInfoWrapper>
              <Typography variant="body2" color="grey.200">
                PNG or JPEG under 10MB (1024px by 1024px)
              </Typography>
              <UserActions>
                <Button variant="contained" color="error">
                  Remove
                </Button>
                <Button variant="outlined">Change</Button>
              </UserActions>
            </UserDataInfoWrapper>
          </UserData>
        }
      />
      <Divider sx={{ marginY: "16px !important" }} />
      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Information"
            subtitle=" Set your brand name."
          />
        }
        secondColumn={
          <SectionContainer>
            <ProfileForm onSubmit={handleSubmit(onSubmit)}>
              <ProfileInputsWrapper>
                <Input
                  placeholder="Brand name"
                  value={watch("fullName")}
                  onChange={handleInputChange("fullName")}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              </ProfileInputsWrapper>
            </ProfileForm>
          </SectionContainer>
        }
      />
      <Divider sx={{ marginY: "16px !important" }} />
      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Default Domain"
            subtitle="Set your unique default domain."
          />
        }
        secondColumn={
          <SectionContainer>
            <ProfileForm onSubmit={handleSubmit(onSubmit)}>
              <ProfileInputsWrapper>
                <Input
                  placeholder="Domain"
                  value={watch("username")}
                  onChange={handleInputChange("username")}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  endIcon={<CustomTagIcon>.latch.so</CustomTagIcon>}
                />
              </ProfileInputsWrapper>
            </ProfileForm>
          </SectionContainer>
        }
      />
      <Divider sx={{ marginY: "16px !important" }} />
      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Biography"
            subtitle="Describe your brand’s long-term objective."
          />
        }
        secondColumn={
          <SectionContainer>
            <ProfileForm onSubmit={handleSubmit(onSubmit)}>
              <Textarea
                placeholder="Who do you help and how do you help them"
                value={watch("description")}
                onChange={handleInputChange("description")}
              />
            </ProfileForm>
          </SectionContainer>
        }
      />
      <Divider sx={{ marginY: "16px !important" }} />
      <ColumnLayout
        firstColumn={
          <SectionContainer>
            <HeadingBlock
              variant="medium"
              title="Brand Management"
              subtitle="Proceed with caution as these actions have significant impacts on your data."
            />
          </SectionContainer>
        }
        secondColumn={
          <ManagementButtons>
            <Button variant="outlined" startIcon={<CopyIcon />}>
              Duplicate
            </Button>
            <Button variant="outlined" startIcon={<DashedCopyIcon />}>
              Templatize
            </Button>
            <Button variant="outlined" startIcon={<UnionIcon />}>
              Merge
            </Button>
            <Button variant="outlined" startIcon={<StopCircleIcon />}>
              Deactivate
            </Button>
            <Button variant="contained" color="error">
              Delete brand
            </Button>
          </ManagementButtons>
        }
      />
    </>
  );
};

const UserData = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const UserActions = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const UserDataInfoWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(3)};
`;

const ProfileForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const ProfileInputsWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  max-width: 342px;
`;

const SectionContainer = styled(Box)`
  max-width: 342px;
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  ${({ theme }) => theme.typography.h3}
  background-color: ${({ theme }) => theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.grey[400]};
  border-radius: 12px;
`;

const CustomTagIcon = styled(Box)`
  ${({ theme }) => theme.typography.label}
  color: ${({ theme }) => theme.palette.grey[200]};
`;

const ManagementButtons = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
  max-width: 350px;
`;
