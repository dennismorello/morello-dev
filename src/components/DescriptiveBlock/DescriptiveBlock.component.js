import { Box, Heading, VStack } from "@chakra-ui/react";

const DescriptiveBlock = ({ title, subtitle, children, ...otherProps }) => (
  <VStack align="flex-start" {...otherProps}>
    <Heading as="h3" size="md" textAlign="left">
      {title}
    </Heading>
    <Heading
      as="h4"
      size="sm"
      textAlign="left"
      textTransform="none"
      fontWeight="normal"
      color="gray.400"
    >
      {subtitle}
    </Heading>
    <Box pt={[2, null, 4]}>{children}</Box>
  </VStack>
);

export default DescriptiveBlock;
