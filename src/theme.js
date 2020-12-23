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
  colors: {
    instagram: {
      50: "#ffe5f0",
      100: "#fabad1",
      200: "#f18fb0",
      300: "#e96290",
      400: "#e23771",
      500: "#c81d57",
      600: "#9d1544",
      700: "#710c30",
      800: "#46051d",
      900: "#1d000b",
    },
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
    Divider: {
      baseStyle: {
        borderColor: "gray.500",
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
