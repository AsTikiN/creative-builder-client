import { alpha, Box, Stack, styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { CrossIcon } from "@/icons/CrossIcon";
import { EditIcon } from "@/icons/EditIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { IconButton } from "@components/IconButton";
import { Select } from "@components/Select";
import { WorkspacesBoard } from "@modules/WorksapcesBoard";
import { ContentElement, EditBookSidebar } from "./components/EditBookSidebar";
import { Editor } from "@modules/Editor";
import { ModalLayout } from "@/layouts/ModalLayout";
import { ImageIcon } from "@/icons/ImageIcon";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { LowIcon } from "@/icons/LowIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { CheckboxBlock } from "@components/Checkbox/CheckboxBlock";
import { routes } from "@config/routes";
import { useNavigate } from "react-router-dom";
import { FolderIcon } from "@/icons/FolderIcon";

const initialContentElements: ContentElement[] = [
  // {
  //   id: 1,
  //   title: "Cover",
  //   type: "cover",
  // },
  {
    id: 2,
    title: "Title Page",
    type: "titlePage",
  },
  // {
  //   id: 3,
  //   title: "Copyright",
  //   type: "copyright",
  // },
  {
    id: 4,
    title: "Table of Contents",
    type: "tableOfContents",
  },
  {
    id: 5,
    title: "Introduction",
    type: "introduction",
  },
  {
    id: 6,
    title: "Folder",
    type: "folder",
    subElements: [
      {
        id: 7,
        title: "Chapter",
        type: "chapter",
      },
      {
        id: 8,
        title: "Chapter",
        type: "chapter",
      },
    ],
  },
  {
    id: 9,
    title: "Chapter",
    type: "chapter",
  },
];

const initialCheckedItems = {
  cover: { status: false, element: { title: "Cover", type: "cover" } },
  titlePage: {
    status: false,
    element: { title: "Title Page", type: "titlePage" },
  },
  copyright: {
    status: false,
    element: { title: "Copyright", type: "copyright" },
  },
  tableOfContents: {
    status: false,
    element: { title: "Table of Contents", type: "tableOfContents" },
  },
  introduction: {
    status: false,
    element: { title: "Introduction", type: "introduction" },
  },
  folder: {
    status: false,
    element: { title: "Folder", type: "folder" },
  },
  chapter: {
    status: false,
    element: { title: "Chapter", type: "chapter" },
  },
  part: {
    status: false,
    element: { title: "Part", type: "part" },
  },
  conclusion: {
    status: false,
    element: { title: "Conclusion", type: "conclusion" },
  },
};

// TODO: refactor all the code
// 1. modal should be a component
// 2. check if types work correctly

export const EditBookPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(0);
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const [contentElements, setContentElements] = useState<ContentElement[]>(
    initialContentElements
  );

  const hasCover = contentElements.some((element) => element.type === "cover");
  const hasCopyright = contentElements.some(
    (element) => element.type === "copyright"
  );
  const hasTableOfContents = contentElements.some(
    (element) => element.type === "tableOfContents"
  );

  const handleCheckBlock = (key: keyof typeof checkedItems) => () => {
    setCheckedItems({
      ...checkedItems,
      [key]: { ...checkedItems[key], status: !checkedItems[key].status },
    });
  };

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

            <IconButton onClick={() => navigate(routes.apps())}>
              <CrossIcon />
            </IconButton>
          </Actions>
        </PageHeader>
        <SidebarContent>
          <EditBookSidebar
            handleAddContent={() => setCurrentStep(0)}
            contentElements={contentElements}
          />
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
        </SidebarContent>
      </Content>

      <ModalLayout
        open={currentStep === 0}
        handleClose={() => setCurrentStep(null)}
        onCancel={() => setCurrentStep(null)}
        onNext={() => {
          setContentElements((prev) => [
            ...prev,
            ...Object.values(checkedItems)
              .filter((item) => item.status)
              .map(
                (item) =>
                  ({
                    id: Math.floor(Math.random() * 1000000),
                    ...item.element,
                  }) as ContentElement
              ),
          ]);
          setCurrentStep(null);
          setCheckedItems(initialCheckedItems);
        }}
      >
        <Accordions>
          <CheckboxBlock
            title="Cover"
            isFilledIcon
            icon={<ImageIcon />}
            tabs={[]}
            disabled={hasCover}
            checked={checkedItems.cover.status}
            onClick={handleCheckBlock("cover")}
          />
          <CheckboxBlock
            title="Title Page"
            isFilledIcon
            icon={<FileTextIcon />}
            tabs={[]}
            checked={checkedItems.titlePage.status}
            onClick={handleCheckBlock("titlePage")}
          />
          <CheckboxBlock
            title="Copyright"
            icon={<LowIcon />}
            tabs={[]}
            disabled={hasCopyright}
            checked={checkedItems.copyright.status}
            onClick={handleCheckBlock("copyright")}
          />
          <CheckboxBlock
            title="Table of Contents"
            icon={<FileSearchIcon />}
            tabs={[]}
            disabled={hasTableOfContents}
            checked={checkedItems.tableOfContents.status}
            onClick={handleCheckBlock("tableOfContents")}
          />
          <CheckboxBlock
            title="Part"
            isFilledIcon
            icon={<FolderIcon />}
            tabs={[]}
            checked={checkedItems.part.status}
            onClick={handleCheckBlock("part")}
          />
          <CheckboxBlock
            title="Introduction"
            isFilledIcon
            icon={<FileSearchIcon />}
            tabs={[]}
            checked={checkedItems.introduction.status}
            onClick={handleCheckBlock("introduction")}
          />
          <CheckboxBlock
            title="Chapter"
            isFilledIcon
            icon={<FileSearchIcon />}
            tabs={[]}
            checked={checkedItems.chapter.status}
            onClick={handleCheckBlock("chapter")}
          />
          <CheckboxBlock
            title="Conclusion"
            isFilledIcon
            icon={<FileSearchIcon />}
            tabs={[]}
            checked={checkedItems.conclusion.status}
            onClick={handleCheckBlock("conclusion")}
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
