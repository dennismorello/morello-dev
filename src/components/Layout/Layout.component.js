import { Box, Stack } from "@chakra-ui/react";

import NavBar from "@/components/NavBar/NavBar.component";

const Layout = ({ hasNavbar = true, children, ...otherProps }) => (
  <Stack
    spacing={16}
    direction={["column-reverse", null, "column"]}
    align="stretch"
  >
    {hasNavbar && (
      <NavBar
        pl={["env(safe-area-inset-left)", null, 4]}
        pr={["env(safe-area-inset-right)", null, 4]}
        pt={4}
        pb={["max(1rem, env(safe-area-inset-bottom))", null, 4]}
        justify={["space-evenly", null, "flex-end"]}
        spacing={[0, null, 4]}
        bg="rgba(26, 32, 44, 0.75)"
        css={{ backdropFilter: "blur(20px) saturate(120%)" }}
        borderBottom={[0, null, "1px"]}
        borderTop={["1px", null, 0]}
        borderColor={["gray.900", null, "gray.900"]}
        zIndex="overlay"
        pos="fixed"
        w="full"
        left={0}
        top={["auto", null, 0]}
        bottom={[0, null, "auto"]}
      />
    )}
    <Box px={[8, null, 16]} py={[12, null, 20]} {...otherProps}>
      {children}
    </Box>
  </Stack>
);

export default Layout;
