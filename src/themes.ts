export interface ThemeType {
  name: "light" | "dark" | "blue";
  colors: {
    background: string;
    backgroundVariant: string;
    surface: string;
    surfaceVariant: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    titles: string;
    titlesVariant: string;
    texts: string;
    disabled: string;
    icons: {
      primary: string;
      variant: string;
    };
    button: {
      filled: {
        primary: string;
        variant: string;
        text: string;
      };
      outlined: {
        primary: string;
        variant: string;
        text: string;
      };
      disabled: {
        primary: string;
        text: string;
      };
    };
  };
}

export const defaultTheme: ThemeType = {
  name: "light" as const,
  colors: {
    background: "#F4F7FB",
    backgroundVariant: "#E0EAFF",
    surface: "#FFFFFF",
    surfaceVariant: "#F9FBFD",
    primary: "#0657F9",
    primaryVariant: "#004ADF",
    secondary: "#E0EAFF",
    titles: "#001746",
    titlesVariant: "#0657F9",
    texts: "#7F8DA9",
    disabled: "#CED5E3",
    icons: {
      primary: "#CED5E3",
      variant: "#475570",
    },
    button: {
      filled: {
        primary: "#0657F9",
        variant: "#004ADF",
        text: "#FFFFFF",
      },
      outlined: {
        primary: "#FFFFFF",
        variant: "#E0EAFF",
        text: "#0657F9",
      },
      disabled: {
        primary: "#F4F7FB",
        text: "#CED5E3",
      },
    },
  },
};
