import { Creative } from "@/api/output/graphql";
import { FC } from "react";

const PLACEHOLDER_IMAGE_URL =
  "https://primefaces.org/cdn/primereact/images/usercard.png";
const INITIAL_ALT = "Card";

type Props = Pick<Creative, "image" | "title">;

export const CardHeader: FC<Props> = ({
  image = PLACEHOLDER_IMAGE_URL,
  title = INITIAL_ALT,
}) => {
  return <img alt={title} src={`data:image/png;base64, ${image}`} />;
};
