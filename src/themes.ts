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
    secondaryVariant: string;
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
    secondaryVariant: "#C6D7F9",
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

export const light: ThemeType = {
  name: "light",
  colors: {
    background: "#F4F7FB",
    backgroundVariant: "#E0EAFF",
    surface: "#FFFFFF",
    surfaceVariant: "#F9FBFD",
    primary: "#0657F9",
    primaryVariant: "#004ADF",
    secondary: "#E0EAFF",
    secondaryVariant: "#C6D7F9",
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

export const dark: ThemeType = {
  name: "dark",
  colors: {
    background: "#141414",
    backgroundVariant: "#272727",
    surface: "#000000",
    surfaceVariant: "#191919",
    primary: "#FFFFFF",
    primaryVariant: "#FFFFFF",
    secondary: "#272727",
    secondaryVariant: "#202020",
    titles: "#FFFFFF",
    titlesVariant: "#FFFFFF",
    texts: "#A8A8A8",
    disabled: "#A8A8A8",
    icons: {
      primary: "#A8A8A8",
      variant: "#FFFFFF",
    },
    button: {
      filled: {
        primary: "#0657F9",
        variant: "#004ADF",
        text: "#FFFFFF",
      },
      outlined: {
        primary: "#FFFFFF",
        variant: "#272727",
        text: "#FFFFFF",
      },
      disabled: {
        primary: "#141414",
        text: "#A8A8A8",
      },
    },
  },
};

export const blue: ThemeType = {
  name: "blue",
  colors: {
    background: "#012A7C",
    backgroundVariant: "#001E59",
    surface: "#001746",
    surfaceVariant: "#012A7C",
    primary: "#0657F9",
    primaryVariant: "#004ADF",
    secondary: "#0657F9",
    secondaryVariant: "#004ADF",
    titles: "#FFFFFF",
    titlesVariant: "#FFFFFF",
    texts: "#CED5E3",
    disabled: "#CED5E3",
    icons: {
      primary: "#CED5E3",
      variant: "#FFFFFF",
    },
    button: {
      filled: {
        primary: "#0657F9",
        variant: "#004ADF",
        text: "#FFFFFF",
      },
      outlined: {
        primary: "#0657F9",
        variant: "#012A7C",
        text: "#0657F9",
      },
      disabled: {
        primary: "#012A7C",
        text: "#7F8DA9",
      },
    },
  },
};
