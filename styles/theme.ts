import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#EEEEF2",
      "100": "#D1D2DC",
      "200": "#B3B5C6",
      "300": "#9699BB",
      "400": "#797D9A",
      "500": "#616488",
      "600": "#4B4D63",
      "700": "#353646",
      "800": "#1F2029",
      "900": "#181823",
    },
    background: {
      "50": "#F7F8FA",
      "100": "#E5E7EE",
    },
    dark: {
      black: "#202226",
      grey: "#3A3B3C",
    },
    black: "#202226",
    yellow: {
      mustard: "#FEDC56",
      light: "#FEEA7F",
      dark: "#F9C846",
      orange: "#ECB753",
      white: "#FDE8C3",
      orangeHover: "#EDDE53",
      skin: "#FDE8C3",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "dark",
      },
    },
  },
});
