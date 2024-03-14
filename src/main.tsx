import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { extendTheme } from "@chakra-ui/react";
import Router from "./router/Router";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
