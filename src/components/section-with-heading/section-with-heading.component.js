import { Container, Heading } from "@chakra-ui/react";

const SectionWithHeading = ({ title, children, ...otherProps }) => (
  <Container as="section" maxW="6xl" {...otherProps}>
    <Heading as="h2" size="lg">
      {title}
    </Heading>
    {children}
  </Container>
);

export default SectionWithHeading;
