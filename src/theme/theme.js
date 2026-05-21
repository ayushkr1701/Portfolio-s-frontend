import { createTheme } from "@mui/material/styles";
import components from "./components";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#38bdf8",
      dark: "#0284c7",
      light: "#7dd3fc",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "#fb7185",
      dark: "#e11d48",
      light: "#fda4af",
      contrastText: "#10151f",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#a6b3c4",
    },
    background: {
      default: "#08111f",
      paper: "rgba(15, 23, 42, 0.72)",
    },
    divider: "rgba(148, 163, 184, 0.18)",
    alternate: {
      main: "#0f172a",
      dark: "#020617",
    },
    cardShadow: "rgba(56, 189, 248, 0.16)",
  },
  typography: typography,
  components: components,
});

export default theme;
