import { Creative } from "@/api/output/graphql";

export type CreativeListItem = Pick<
  Creative,
  "id" | "title" | "description" | "image"
>;
