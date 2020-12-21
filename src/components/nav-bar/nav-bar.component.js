import { HStack } from "@chakra-ui/react";

// Components
import NavBarItem from "./nav-bar-item.component";

const NavBar = (props) => (
  <HStack
    as="nav"
    pos="fixed"
    right={0}
    bottom={0}
    spacing={[0, undefined, 4]}
    zIndex="sticky"
    justify="space-evenly"
    py={4}
    px={[0, undefined, 4]}
    bg="gray.700"
    w={["full", undefined, "auto"]}
    {...props}
  >
    <NavBarItem href="/">Home</NavBarItem>
    <NavBarItem href="/about">About</NavBarItem>
    <NavBarItem href="/contacts">Contacts</NavBarItem>
    <NavBarItem href="/blog">Blog</NavBarItem>
  </HStack>
);

export default NavBar;
