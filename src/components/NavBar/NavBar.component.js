import { HStack } from "@chakra-ui/react";

// Components
import NavBarItem from "./NavBarItem.component";

const NavBar = (props) => (
  <HStack as="nav" {...props}>
    <NavBarItem href="/">Home</NavBarItem>
    <NavBarItem href="/about">About</NavBarItem>
    <NavBarItem href="/contacts">Contacts</NavBarItem>
    <NavBarItem href="https://blog.morello.dev" rel="noopener" target="_blank">
      Blog
    </NavBarItem>
  </HStack>
);

export default NavBar;
