import { HStack } from "@chakra-ui/react";

// Components
import NavBarItem from "./nav-bar-item.component";

const NavBar = (props) => (
  <HStack as="nav" {...props}>
    <NavBarItem href="/">Home</NavBarItem>
    <NavBarItem href="/about">About</NavBarItem>
    <NavBarItem href="/contacts">Contacts</NavBarItem>
    <NavBarItem href="/blog">Blog</NavBarItem>
  </HStack>
);

export default NavBar;
