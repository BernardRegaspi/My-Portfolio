import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    styles: {
        global: {
          body: {
            bg: "#111",
            color: "#fff"
          },
        },
      },
});

export default Theme;
