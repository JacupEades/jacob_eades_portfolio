import { motion } from "framer-motion";
import React, {
  useEffect,
  useState,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
} from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ThemeUpdater from "../ThemeUpdater";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {};

function Header({}: Props) {
  const theme = useTheme();
  // Header breakpoint dropdown logic from mui
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      // console.log(scrolled)
      let element: any = document.getElementById("header");
      if (scrolled >= 60) {
        element.classList.add("bg-neutralHeader");
      } else {
        element.classList.remove("bg-neutralHeader");
      }
    });
  });

  const nineToFourteen = useMediaQuery({ query: "(min-width: 1056px)" });

  return (
    <>
      {/* this div is for the header background later */}
      <div id="header" className="fixed z-50 w-screen top-0">
        <header className="flex justify-between max-w-auto max-w-7xl top-0 py-1 tablet:py-4 mx-auto h-[2.75rem] tablet:h-[5.5rem]">
          {/* JE Logo */}
          <motion.div
            initial={{ x: -200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="flex items-center px-8 desktop:p-0 font-pop tablet:h-14 tablet:w-14 font-bold text-3xl tablet:text-4xl cursor-pointer bold"
          >
            <a href="#hero">JE</a>
          </motion.div>
          {/* Header Navigation */}
          <motion.div
            initial={{ x: 200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.25 }}
            className="hidden laptop:flex font-pop font-medium text-xl items-center px-8 space-x-12"
          >
            <a href="#about">About</a>
            <a href="#major">Major Projects</a>
            <a href="#mini">Mini Projects</a>
            <a href="#connect">Contact</a>
            <ThemeUpdater />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.25 }}
            className="flex laptop:hidden items-center px-8 space-x-6"
          >
            <ThemeUpdater />
            <div>
              <Button
                ref={anchorRef}
                className="p-0"
                id="burger-button"
                aria-controls={open ? "burger-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Image
                  src="/burger_menu.svg"
                  alt="icon"
                  className={
                    theme.palette.mode === "light" ? "" : styles.burgerInvert
                  }
                  style={{ width: "32", height: "32" }}
                  width={32}
                  height={32}
                />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="burger-menu"
                          aria-labelledby="burger-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>
                            <a href="#about">About</a>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <a href="#major">Major Projects</a>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <a href="#mini">Mini Projects</a>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <a href="#connect">Contact</a>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </motion.div>
        </header>
      </div>
    </>
  );
}

export default Header;
