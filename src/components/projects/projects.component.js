import { Box, Link, Text, VStack } from "@chakra-ui/react";

// Components
import DescriptiveBlock from "../descriptive-block/descriptive-block.component";

const Projects = (props) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...props}>
    <DescriptiveBlock
      title={
        <Link href="https://github.com/dennismorello/covid19-app" isExternal>
          COVID-19 Tracker (2020 - Current)
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Box pt={4}>
        <Text>
          Web-app for monitoring the spreading of COVID-19 with daily statistics
          and interactive graphs.
        </Text>
      </Box>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link
          href="https://github.com/dennismorello/react-awesome-reveal"
          isExternal
        >
          React Awesome Reveal (2019 - Current)
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Box pt={4}>
        <Text>
          React library written in TypeScript that adds reveal animations using
          the Intersection Observer API to detect when the elements appear in
          the viewport. Animations are internally provided by Emotion and
          implemented as CSS Animations to benefit from hardware acceleration.
        </Text>
      </Box>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link
          href="https://github.com/dennismorello/react-test-attributes"
          isExternal
        >
          React Test Attributes (2019 - Current)
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Box pt={4}>
        <Text>
          A library for React apps that decorates the DOM with custom attributes
          that can be used to uniquely indentify elements in a page. The main
          use case is for E2E testing using tools like Cypress or Selenium.
        </Text>
      </Box>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://morello.dev" isExternal>
          JavaScript Notes (2019 - Current)
        </Link>
      }
      subtitle="Dev Blog"
    >
      <Box pt={4}>
        <Text>
          A blog where I write about JavaScript, ReactJS and other dev stuff.
        </Text>
      </Box>
    </DescriptiveBlock>
  </VStack>
);

export default Projects;
