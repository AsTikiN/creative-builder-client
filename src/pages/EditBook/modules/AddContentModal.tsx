import { ModalLayout } from "@/layouts/ModalLayout";
import { Stack, styled } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { ContentElement } from "./EditBookSidebar";
import { initialCheckedItems } from "../mock/mockContentElements";
import { CheckboxBlock } from "@components/Checkbox/CheckboxBlock";
import { FileTextIcon } from "@/icons/FileTextIcon";
import { ImageIcon } from "@/icons/ImageIcon";
import { LowIcon } from "@/icons/LowIcon";
import { FileSearchIcon } from "@/icons/FileSearchIcon";
import { FolderIcon } from "@/icons/FolderIcon";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  contentElements: ContentElement[];
  setContentElements: Dispatch<SetStateAction<ContentElement[]>>;
}

export const AddContentModal: FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  contentElements,
  setContentElements,
}) => {
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const handleNext = () => {
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
    setIsModalOpen(false);
    setCheckedItems(initialCheckedItems);
  };

  return (
    <ModalLayout
      open={isModalOpen}
      handleClose={handleCloseModal}
      onCancel={handleCloseModal}
      onNext={handleNext}
    >
      <Wrapper>
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
      </Wrapper>
    </ModalLayout>
  );
};

const Wrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(3)};
  min-width: 408px;
`;
