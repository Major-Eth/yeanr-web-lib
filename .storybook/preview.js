import ThemeProvider from "../src/providers";
import {light, dark, blue} from "../src/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      items: ['light', 'dark', 'blue'],
      showName: true,
    },
  },
};

const withThemeProvider=(Story,context)=> {
  let theme = light;
  if (context?.globals?.theme === 'light')
    theme = light;
  if (context?.globals?.theme === 'dark')
    theme = dark;
  if (context?.globals?.theme === 'blue')
    theme = blue;
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];