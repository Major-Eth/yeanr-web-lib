export interface ThemeType {
  name: "light" | "dark" | "blue";
  colors: { [key: string]: string };
}

export const defaultTheme: ThemeType = {
  name: "light" as const,
  colors: {
    background: "#F4F7FB",
    "background-variant": "#E0EAFF",
    surface: "#FFFFFF",
    "surface-variant": "#F9FBFD",
    primary: "#0657F9",
    "primary-variant": "#004ADF",
    secondary: "#E0EAFF",
    titles: "#001746",
    "titles-variant": "#0657F9",
    texts: "#7F8DA9",
    icons: "#CED5E3",
    "icons-variant": "#475570",
  },
};
