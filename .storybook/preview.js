export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "dark",
        value: "#000000",
      },
      {
        name: "light",
        value: "#ffffff",
      },
    ],
  },
};
