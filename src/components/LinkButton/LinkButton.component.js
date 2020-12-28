import { Button } from "@chakra-ui/react";
import Link from "next/link";

const LinkButton = ({ href, ...otherProps }) => {
  return (
    <Link href={href} passHref>
      <Button as="a" {...otherProps} />
    </Link>
  );
};

export default LinkButton;
