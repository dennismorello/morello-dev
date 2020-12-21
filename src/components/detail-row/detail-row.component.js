import { HStack, chakra } from "@chakra-ui/react";

const DetailRow = ({ title, children, ...otherProps }) => (
  <HStack align="center" justify="space-between" {...otherProps}>
    <chakra.span fontWeight="bold">{title}</chakra.span>
    <chakra.span>{children}</chakra.span>
  </HStack>
);

export default DetailRow;
