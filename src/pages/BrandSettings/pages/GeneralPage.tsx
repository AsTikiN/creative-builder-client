import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Divider } from "@components/Divider/Divider";
import { CopyIcon } from "@/icons/CopyIcon";
import { UnionIcon } from "@/icons/UnionIcon";
import { StopCircleIcon } from "@/icons/StopCircleIcon";
import { DashedCopyIcon } from "@/icons/DashedCopyIcon";

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
      <UserSection>
        <SectionTitleData>
          <Typography variant="h5" color="grey.400">
            Logo
          </Typography>
          <Typography variant="body2" color="grey.200">
            Upload your brand’s logo
          </Typography>
        </SectionTitleData>

        <UserData>
          <StyledAvatar variant="square">FDS</StyledAvatar>
          <UserDataInfoWrapper>
            <Typography variant="body2" color="grey.200">
              We support PNGs, JPEGs under 10MB
            </Typography>
            <UserActions>
              <Button variant="contained" color="error">
                Remove
              </Button>
              <Button variant="outlined">Change</Button>
            </UserActions>
          </UserDataInfoWrapper>
        </UserData>
      </UserSection>

      <Divider />

      <InformationSection>
        <SectionContainer>
          <SectionTitleData>
            <Typography variant="h5" color="grey.400">
              Information
            </Typography>
            <Typography variant="body2" color="grey.200">
              Set your brand's identity by providing a name and a unique URL
              slug
            </Typography>
          </SectionTitleData>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <ProfileInputsWrapper>
              <Input
                placeholder="Brand name"
                value={watch("fullName")}
                onChange={handleInputChange("fullName")}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
              <Input
                placeholder="Brand URL"
                value={watch("username")}
                onChange={handleInputChange("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
                startIcon={<CustomTagIcon>booklab.ai/</CustomTagIcon>}
              />
            </ProfileInputsWrapper>
            <Textarea
              placeholder="Who do you help and how do you help them"
              value={watch("description")}
              onChange={handleInputChange("description")}
            />
          </ProfileForm>
        </SectionContainer>
      </InformationSection>

      <Divider />

      <AccountManagementSection>
        <SectionTitleData>
          <Typography variant="h5" color="grey.400">
            Brand Management
          </Typography>
          <Typography variant="body2" color="grey.200">
            Proceed with caution as these actions have significant impacts on
            your brand data
          </Typography>
        </SectionTitleData>

        <ManagmentButtons>
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
        </ManagmentButtons>
      </AccountManagementSection>
    </>
  );
};
const UserSection = styled(Box)``;

const SectionTitleData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const UserData = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(4)} 0;
`;

const UserActions = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const UserDataInfoWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(3)};
`;

const InformationSection = styled(Box)`
  padding: ${({ theme }) => `${theme.spacing(4)} 0 ${theme.spacing(3.25)}`};
`;

const ProfileForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const AccountManagementSection = styled(Stack)`
  padding: ${({ theme }) => `${theme.spacing(4)} 0`};
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const ProfileInputsWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const SectionContainer = styled(Box)`
  max-width: 616px;
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

const ManagmentButtons = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;
