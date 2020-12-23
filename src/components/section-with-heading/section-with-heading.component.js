import { Container, Heading, Link, useBreakpointValue } from "@chakra-ui/react";

const SectionWithHeading = ({
  id,
  title,
  titleProps,
  css,
  children,
  ...otherProps
}) => {
  const scrollMarginTop = useBreakpointValue([72, null, 96]);

  return (
    <Container
      as="section"
      maxW="6xl"
      id={id}
      css={{
        scrollMarginTop,
        paddingTop: scrollMarginTop,
        marginTop: -scrollMarginTop,
        ...css,
      }}
      {...otherProps}
    >
      <Heading as="h2" size="lg" color="teal.300" {...titleProps}>
        {id ? <Link href={`#${id}`}>{title}</Link> : title}
      </Heading>
      {children}
    </Container>
  );
};

export default SectionWithHeading;
