import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
 components: {
  Button: {
   baseStyle: {
    fontWeight: "bold",
   },
   sizes: {
    lg: {
     h: "56px",
     fontSize: "lg",
     px: "32px",
    },
   },
   variants: {
    solid: (props) => ({
     bg: props.colorMode === "dark" ? "lightblue.300" : "blue.500",
    }),
   },
   defaultProps: {
    size: "lg",
    variant: "solid",
   },
  },
 },

 colors: {
  primary: {
   50: "#f5f5f5",
   100: "#e8e8e8",
   200: "#d1d1d1",
   300: "#b9b9b9",
   400: "#8c8c8c",
   500: "#5e5e5e",
  },
 },

 Heading: {
  baseStyle: {
   fontWeight: "Serif",
  },
 },
 FormLabel: {
  baseStyle: {
   fontWeight: "Serif",
  },
  sizes: {
   lg: {
    h: "56px",
    fontSize: "lg",
    px: "32px",
   },
  },
  variants: {
   solid: (props) => ({
    bg: props.colorMode === "dark" ? "red.300" : "red.500",
   }),
  },
  defaultProps: {
   size: "lg",
   variant: "solid",
  },
 },
 styles: {
  global: (props) => ({
   body: {
    color: props.colorMode === "dark" ? "white" : "gray.800",
    bg: props.colorMode === "dark" ? "gray.800" : "white",
    lineHeight: "base",
    fontFamily: "body",
   },
  }),
 },
});
