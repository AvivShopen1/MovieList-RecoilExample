import React, { useRef, useState } from "react";
import { IconButton, Menu, MenuItem, Popover, Typography } from "@mui/material";
import { PlusOne } from "@mui/icons-material";

type Props = {};

export const TestPopover = () => {
  const anchorElRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMenuItem, setSelectMenuItem] = useState<string>("");
  const menuItems: string[] = [
    "What is this?",
    "Why is this?",
    "Who is this?",
    "Where is this?",
    "When is this?",
    "How is this?",
    "Why is this?",
    "Who is this?",
    "Where is this?",
  ];

  function toggle() {
    setOpen(!open);
  }

  function close(menuItem: string) {
    setOpen(false);
    setSelectMenuItem(menuItem);
  }

  return (
    <>
      <Typography>Selected Item is: {selectedMenuItem}</Typography>
      <IconButton ref={anchorElRef} onClick={toggle}>
        <PlusOne />
      </IconButton>
      {anchorElRef.current && (
        <Menu anchorEl={anchorElRef.current} open={open}>
          {menuItems.map((menuItem, index) => (
            <MenuItem onClick={() => close(menuItem)} key={index}>
              {menuItem}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
