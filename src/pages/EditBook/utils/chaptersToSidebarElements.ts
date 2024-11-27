import { ChapterDto } from "@store/api/baseApi";
import { ContentElement } from "../modules/EditBookSidebar";

export const chaptersToSidebarElements = (
  chapters: ChapterDto[]
): ContentElement[] => {
  return chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    type: chapter.type,
  }));
};
