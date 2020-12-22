import { Heading, VStack } from "@chakra-ui/react";

const DescriptiveBlock = ({ title, subtitle, children, ...otherProps }) => (
  <VStack align="flex-start" {...otherProps}>
    <Heading as="h5" size="md" textAlign="left">
      {title}
    </Heading>
    <Heading
      as="h6"
      size="sm"
      textAlign="left"
      textTransform="none"
      fontWeight="normal"
      color="gray.400"
    >
      {subtitle}
    </Heading>
    {children}
  </VStack>
);

export default DescriptiveBlock;
