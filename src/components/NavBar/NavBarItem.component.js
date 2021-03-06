import { useRouter } from "next/router";

import LinkButton from "@/components/LinkButton/LinkButton.component";

const NavBarItem = ({ href, ...otherProps }) => {
  const { pathname } = useRouter();

  return (
    <LinkButton
      href={href}
      size="sm"
      variant={href === pathname ? "solid" : "ghost"}
      {...otherProps}
    />
  );
};

export default NavBarItem;
