import { CrossIcon } from "@/icons/CrossIcon";
import { EditIcon } from "@/icons/EditIcon";
import { LinkIcon } from "@/icons/LinkIcon";
import { SettingsSixAnglesIcon } from "@/icons/SettingsSixAnglesIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { IconButton } from "@components/IconButton";
import { BasicSelect } from "@components/Select";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { alpha, Box, Stack, styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export const EditBookPage = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <WorkspacesBoard />
      <Content>
        <PageHeader>
          <BookData>
            <CoverImageWrapper>
              <MockImage />
            </CoverImageWrapper>
            <BookTextData>
              <Typography variant="h5" color={theme.palette.grey[400]}>
                Leadership & Planning Lessons From Top Executives
              </Typography>
              <Typography variant="body2" color={theme.palette.grey[50]}>
                Edited 2 hours ago
              </Typography>
            </BookTextData>
          </BookData>
          <Actions>
            <BasicSelect
              open={isOpen}
              setIsOpen={setIsOpen}
              options={[
                {
                  label: "Creator view",
                  value: "creator",
                  icon: <EditIcon />,
                },
                {
                  label: "Consumer view",
                  value: "consumer",
                  icon: <UsersIcon />,
                },
              ]}
            />
            <IconButton>
              <SettingsSixAnglesIcon />
            </IconButton>

            <IconButton>
              <LinkIcon />
            </IconButton>

            <IconButton>
              <CrossIcon />
            </IconButton>
          </Actions>
        </PageHeader>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  height: 100vh;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
`;

const PageHeader = styled(Box)`
  display: flex;
  gap: 24px;
  padding: 12px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
`;

const CoverImageWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  border-bottom: 0.1px solid ${({ theme }) => theme.palette.grey[100]};
  background-color: ${({ theme }) => theme.palette.grey[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MockImage = styled(Box)`
  width: 20px;
  height: 30px;
  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.24)};
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(209.36deg, #f2f2f2 0%, rgba(242, 242, 242, 0) 77.82%);
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;
`;

const Actions = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BookData = styled(Box)`
  display: flex;
  flex: 1;
  gap: 12px;
`;

const BookTextData = styled(Stack)`
  gap: 4px;
`;
