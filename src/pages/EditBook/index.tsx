import { alpha, Box, Stack, styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { CrossIcon } from "@/icons/CrossIcon";
import { EditIcon } from "@/icons/EditIcon";
import { SettingsSixAnglesIcon } from "@/icons/SettingsSixAnglesIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { IconButton } from "@components/IconButton";
import { Select } from "@components/Select";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { EditBookSidebar } from "./components/EditBookSidebar";
import { Editor } from "@modules/Editor";
import { ModalLayout } from "@/layouts/ModalLayout";
import { Accordion } from "@components/Accordion/Accordion";
import { ImageIcon } from "@/icons/ImageIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { LowIcon } from "@/icons/LowIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FolderIcon } from "@/icons/FolderIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { CheckboxBlock } from "@components/Checkbox/CheckboxBlock";

export const EditBookPage = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(0);

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
            <Select
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            />
            <IconButton>
              <SettingsIcon />
            </IconButton>

            <IconButton>
              <CrossIcon />
            </IconButton>
          </Actions>
        </PageHeader>
        <SidebarContent>
          <EditBookSidebar handleAddContent={() => setCurrentStep(0)} />
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
        </SidebarContent>
      </Content>

      <ModalLayout
        open={currentStep === 0}
        handleClose={() => setCurrentStep(null)}
        onCancel={() => setCurrentStep(null)}
        onNext={() => setCurrentStep(1)}
      >
        <Accordions>
          <CheckboxBlock
            title="Cover"
            isFilledIcon
            icon={<ImageIcon />}
            tabs={[]}
            disabled
          />
          <CheckboxBlock
            title="Title Page"
            isFilledIcon
            icon={<FileTextIcon />}
            tabs={[]}
            checked={false}
          />
          <CheckboxBlock
            title="Copyright"
            isFilledIcon
            icon={<LowIcon />}
            tabs={[]}
            checked={true}
          />
          <CheckboxBlock
            title="Table of Contents"
            isFilledIcon
            icon={<FileSearchIcon />}
            tabs={[]}
            checked={false}
          />
        </Accordions>
      </ModalLayout>
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
  /* gap: 24px; */
  height: 100vh;
`;

const PageHeader = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
`;

const CoverImageWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
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
  /* box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a; */
`;

const Actions = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const BookData = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const BookTextData = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

const SidebarContent = styled(Box)`
  display: flex;
  height: 100%;
`;

const EditorWrapper = styled(Box)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(5, 6)};
  padding-top: ${({ theme }) => theme.spacing(25)};
  height: calc(100vh - 72.5px);
  overflow-y: auto;
`;

const Accordions = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(3)};
  min-width: 408px;
`;
