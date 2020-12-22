import { useRouter } from "next/router";

// Components
import LinkButton from "../link-button/link-button.component";

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
