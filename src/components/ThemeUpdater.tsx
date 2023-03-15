import { FC, useEffect, useState } from "react";
import { Button, css, MenuItem, Select, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="max-h-xl"></div>;

  return (
    <div className="grid gap-2">
      <Button
        style={{
          background: "linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%)",
        }}
        variant="contained"
        endIcon={
          resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
        }
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
      </Button>
    </div>
  );
};

export default ThemeUpdater;
