import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/Home.module.css";

type Props = {
  text: string;
  icon?: string;
  link: string;
  target?: string;
  isDisabled?: boolean;
};

const Clear = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 700,
  color: "var(--primary-medium)",
  padding: "12px 24px",
  border: "2px solid",
  backdropFilter: "blur(2px)",
  lineHeight: 1.5,
  borderColor: "var(--border-weak)",
  "&:hover": {
    backgroundColor: "var(--neutral-glass-hover)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "var(--neutral-glass-hover)",
    borderColor: "var(--primary-weak)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(255, 255, 255, 0.9)",
  },
});

function ButtonClear({ text, icon, link, target, isDisabled }: Props) {
  const [themeCheck, setThemeCheck] = useState("light");
  const theme = useTheme();

  useEffect(() => {
    if (theme) {
      setThemeCheck(theme.palette.mode);
    }
  }, [theme]);

  return (
    <>
      <Clear
        className="bg-opacity-100 gap-2 bg-buttonGlass"
        variant="contained"
        disabled={isDisabled}
        href={link}
      >
        {icon ? (
          <Image
            src={icon}
            alt="icon"
            className={styles.svgsInvert}
            style={{ width: "auto", height: "auto", filter: "100%" }}
            width={24}
            height={24}
          />
        ) : (
          ""
        )}
        <span
          style={
            themeCheck === "dark" ? { color: "#fff" } : { color: "#614AD3" }
          }
        >
          {text}
        </span>
      </Clear>
    </>
  );
}

export default ButtonClear;
