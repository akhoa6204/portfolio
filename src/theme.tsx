import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#111827",
    },
    primary: {
      main: "#60a5fa",
    },
    secondary: {
      main: "#9333ea",
    },
    text: {
      primary: "#f9fafb",
      secondary: "#94a3b8",
    },
  },
  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--gradient": "linear-gradient(90deg, #13ADC7, #6978D1, #945DD6)",
          "--hover-gradient":
            "linear-gradient(90deg, #31CBE5, #8796EF, #B27BF4)",
        },
      },
    },
  },
});
export default theme;
