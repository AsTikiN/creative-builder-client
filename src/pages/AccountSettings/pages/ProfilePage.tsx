import { ChangeEvent } from "react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Divider } from "@components/Divider/Divider";

type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  description: string;
  email: string;
};

export const ProfilePage = () => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      description: "",
      email: "",
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
            Avatar
          </Typography>
          <Typography variant="body2" color="grey.200">
            Upload your account avatar
          </Typography>
        </SectionTitleData>

        <UserData>
          <StyledAvatar />
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
              Name
            </Typography>
            <Typography variant="body2" color="grey.200">
              Enter your legal first and last name
            </Typography>
          </SectionTitleData>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <ProfileInputsWrapper>
              <Input
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                placeholder="First name"
                value={watch("firstName")}
                onChange={handleInputChange("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
              <Input
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                placeholder="Last name"
                value={watch("lastName")}
                onChange={handleInputChange("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </ProfileInputsWrapper>
          </ProfileForm>
        </SectionContainer>
      </InformationSection>

      <Divider />

      <InformationSection>
        <SectionContainer>
          <SectionTitleData>
            <Typography variant="h5" color="grey.400">
              Username
            </Typography>
            <Typography variant="body2" color="grey.200">
              Set your unique username
            </Typography>
          </SectionTitleData>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <ProfileInputsWrapper>
              <Input
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_-]+$/,
                    message:
                      "Username can only contain letters, numbers, underscores and dashes",
                  },
                })}
                placeholder="Username"
                value={watch("username")}
                onChange={handleInputChange("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
                startIcon={<CustomTagIcon>@</CustomTagIcon>}
              />
            </ProfileInputsWrapper>
          </ProfileForm>
        </SectionContainer>
      </InformationSection>

      <Divider />

      <InformationSection>
        <SectionContainer>
          <SectionTitleData>
            <Typography variant="h5" color="grey.400">
              Email
            </Typography>
            <Typography variant="body2" color="grey.200">
              Update your account's email address
            </Typography>
          </SectionTitleData>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <ProfileInputsWrapper>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                value={watch("email")}
                onChange={handleInputChange("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                endIcon={
                  <Typography variant="body1" color="grey.200">
                    Apply
                  </Typography>
                }
              />
            </ProfileInputsWrapper>
          </ProfileForm>
        </SectionContainer>
      </InformationSection>

      <Divider />

      <InformationSection>
        <SectionContainer>
          <SectionTitleData>
            <Typography variant="h5" color="grey.400">
              Biography
            </Typography>
            <Typography variant="body2" color="grey.200">
              Set your biography displayed on your public profile
            </Typography>
          </SectionTitleData>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            {/* <ProfileInputsWrapper>
              <Input
                placeholder="Username"
                value={watch("username")}
                onChange={handleInputChange("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
                startIcon={<CustomTagIcon>@</CustomTagIcon>}
              />
            </ProfileInputsWrapper> */}
            <Textarea
              {...register("description", {
                maxLength: {
                  value: 500,
                  message: "Biography must be less than 500 characters",
                },
              })}
              placeholder="Describe your professional achievements."
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
            Account Management
          </Typography>
          <Typography variant="body2" color="grey.200">
            Proceed with caution as these actions have significant impacts on
            your data
          </Typography>
        </SectionTitleData>

        <Button variant="contained" color="error">
          Delete account
        </Button>
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
  gap: ${({ theme }) => theme.spacing(2)};
`;

const SectionContainer = styled(Box)`
  max-width: 343px;
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  color: transparent;
`;

const CustomTagIcon = styled(Box)`
  ${({ theme }) => theme.typography.label}
  color: ${({ theme }) => theme.palette.grey[200]};
`;
