import { ChangeEvent } from "react";
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Divider } from "@components/Divider/Divider";
import HeadingBlock from "@components/HeadingBlock ";
import ColumnLayout from "@/layouts/ColumnLayout";
import { DoneIcon } from "@/icons/DoneIcon.tsx";

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
      <ColumnLayout
        variant="sm"
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Picture"
            subtitle="Upload your profile picture."
          />
        }
        secondColumn={
          <UserData>
            <StyledAvatar />
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
            title="Name"
            subtitle="Enter your first and last name."
          />
        }
        secondColumn={
          <SectionContainer>
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
        }
      />

      <Divider sx={{ marginY: "16px !important" }} />

      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title=" Username"
            subtitle="Set your unique profile username."
          />
        }
        secondColumn={
          <SectionContainer>
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
                  endIcon={!!watch("username") && <DoneIcon />}
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
            title="Email"
            subtitle="Update your account’s email address."
          />
        }
        secondColumn={
          <SectionContainer>
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
        }
      />

      <Divider sx={{ marginY: "16px !important" }} />

      <ColumnLayout
        firstColumn={
          <HeadingBlock
            variant="medium"
            title="Biography"
            subtitle="Edit your profile biography."
          />
        }
        secondColumn={
          <SectionContainer>
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
        }
      />

      <Divider sx={{ marginY: "16px !important" }} />
      <ColumnLayout
        firstColumn={
          <AccountManagement>
            <HeadingBlock
              variant="medium"
              title="Account management"
              subtitle="This will permanently delete your account. Brand event logs will still retain actions committed by this account."
            />
          </AccountManagement>
        }
        secondColumn={
          <AccountManagementActions>
            <Button variant="contained" color="error">
              Delete account
            </Button>
          </AccountManagementActions>
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
const AccountManagement = styled(Stack)`
  max-width: 350px;
`;
const AccountManagementActions = styled(Stack)`
  width: fit-content;
`;
