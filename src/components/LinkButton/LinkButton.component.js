import Link from "next/link";
import { Button } from "@chakra-ui/react";

const LinkButton = ({ href, ...otherProps }) => {
  return (
    <Link href={href} passHref>
      <Button as="a" {...otherProps} />
    </Link>
  );
};

export default LinkButton;
