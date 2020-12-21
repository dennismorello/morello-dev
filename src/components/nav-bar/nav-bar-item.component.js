import { useRouter } from "next/router";

// Components
import LinkButton from "../link-button/link-button.component";

const NavBarItem = ({ href, ...otherProps }) => {
  const { pathname } = useRouter();

  return (
    <LinkButton
      href={href}
      variant={href === pathname ? "solid" : "outline"}
      {...otherProps}
    />
  );
};

export default NavBarItem;
