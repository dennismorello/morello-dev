import { Container, Heading, Link, useBreakpointValue } from "@chakra-ui/react";

const SectionWithHeading = ({ id, title, css, children, ...otherProps }) => {
  const scrollMarginTop = useBreakpointValue([16, null, 96]);

  return (
    <Container
      as="section"
      maxW="6xl"
      id={id}
      css={{ scrollMarginTop, ...css }}
      {...otherProps}
    >
      <Heading as="h2" size="lg">
        {id ? <Link href={`#${id}`}>{title}</Link> : title}
      </Heading>
      {children}
    </Container>
  );
};

export default SectionWithHeading;
