import { Typography } from "@mui/material";
import { ArrowLeft } from "@/icons/ArrowLeft.tsx";
import { Link } from "@components/Link";

interface ILinkWithArrow {
  title: string;
  link: string;
}
export const LinkWithArrow = ({ title, link = "#" }: ILinkWithArrow) => {
  return (
    <Link
      to={link}
      underline="none"
      color="primary.main"
      display="flex"
      gap={1}
    >
      <Typography variant="h6" color="primary.main">
        {title}
      </Typography>

      <ArrowLeft />
    </Link>
  );
};
