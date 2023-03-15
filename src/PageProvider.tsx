import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { lightTheme } from "./theme/index";

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider = ({ children }: PageProviderProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default PageProvider;
