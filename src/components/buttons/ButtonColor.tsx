import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  text: string;
  icon?: string;
  link: string;
  target?: string;
  tooltip?: string;
  isDisabled?: boolean;
};

const ColorButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 700,
  padding: "12px 24px",
  border: "2px solid",
  lineHeight: 1.5,
  borderColor: "var(--border-weak)",
  "&:hover": {
    backgroundColor: "var(--primary-strong)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "var(--primary-strong)",
    borderColor: "var(--primary-weak)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(255, 255, 255, 0.9)",
  },
});

function ButtonColor({ text, icon, link, target, tooltip, isDisabled }: Props) {
  return (
    <Tooltip title={tooltip} style={{ fontSize: "16px" }}>
      <ColorButton
        className="bg-opacity-100 bg-primaryMedium hover:bg-sky-700"
        variant="contained"
        href={link}
        disabled={isDisabled ? true : false}
      >
        {icon ? <Image src={icon} alt="icon" width={24} height={24} /> : ""}
        {text}
      </ColorButton>
    </Tooltip>
  );
}

export default ButtonColor;
