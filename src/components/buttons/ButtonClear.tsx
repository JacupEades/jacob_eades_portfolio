import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@mui/material";

type Props = {
  text: string;
  icon?: string;
  link: string;
  target?: string;
};

const Clear = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 700,
  color: "var(--primary-medium)",
  backgroundColor: "var(--neutral-glass)",
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

function ButtonClear({ text, icon, link, target }: Props) {
  return (
    <>
      <Clear
        className="bg-opacity-100 gap-2 bg-buttonGlass"
        variant="contained"
      >
        {icon ? (
          <Image
            src={icon}
            alt="icon"
            style={{ width: "24", height: "24" }}
            width={24}
            height={24}
          />
        ) : (
          ""
        )}
        <a href={link} target={target}>
          {text}
        </a>
      </Clear>
    </>
  );
}

export default ButtonClear;
