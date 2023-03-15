import { PaletteOptions, createTheme, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "dark",
  },
});

export const globalStyles = css`
  :root {
  }

  [data-theme="dark"] {
    }
  }
`;
