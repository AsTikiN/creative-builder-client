import { Menu as MUIMenu, MenuProps as MUIMenuProps } from "@mui/material";

import { ReactNode } from "react";

type MenuProps = {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  id?: string;
  open: boolean;
  children: ReactNode;
} & Omit<MUIMenuProps, "anchorEl" | "onClose" | "children">;

const Menu = ({
  anchorEl,
  handleClose,
  children,
  open,
  id = "simple-menu",
  ...props
}: MenuProps) => {
  return (
    <MUIMenu
      id={id}
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      MenuListProps={{
        style: {
          padding: 0,
        },
      }}
      PaperProps={{
        style: {
          boxShadow:
            " 0px 24px 24px -8px #0d0d0d08,0px 10px 10px -5px #0d0d0d08,0px 5px 5px -2.5px #0d0d0d08,0px 3px 3px -1.5px" +
            " #0d0d0d0a,0px 2px 2px -1px #0d0d0d0a,0px 1px 1px -0.5px #0d0d0d08,0px 0px 0px 0.5px #002a570f,0px 0px 0.5px 0px #0d0d0d66",
        },
      }}
      {...props}
    >
      {children}
    </MUIMenu>
  );
};

export default Menu;
