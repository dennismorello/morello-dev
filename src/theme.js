import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "full",
        textTransform: "uppercase",
      },
      defaultProps: {
        colorScheme: "teal",
      },
    },
    Container: {
      baseStyle: {
        px: 0,
      },
    },
    Heading: {
      baseStyle: {
        textTransform: "uppercase",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: "full",
        },
      },
      defaultProps: {
        size: "lg",
        variant: "filled",
      },
      variants: {
        filled: () => ({
          field: { _focus: { borderColor: "teal.200" }, rounded: "full" },
        }),
      },
    },
    Textarea: {
      defaultProps: {
        size: "lg",
        variant: "filled",
      },
      variants: {
        filled: () => ({
          _focus: { borderColor: "teal.200" },
          borderRadius: "3xl",
        }),
      },
    },
  },
});

export default theme;
