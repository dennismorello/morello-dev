import { Link, Text, VStack } from "@chakra-ui/react";

// Components
import DescriptiveBlock from "../descriptive-block/descriptive-block.component";

const Projects = (props) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...props}>
    <DescriptiveBlock
      title={
        <Link href="https://github.com/dennismorello/covid19-app" isExternal>
          COVID-19 Tracker
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Text>
        Web-app for monitoring the spreading of COVID-19 with daily statistics
        and interactive graphs.
      </Text>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link
          href="https://github.com/dennismorello/react-awesome-reveal"
          isExternal
        >
          React Awesome Reveal
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Text>
        React library written in TypeScript that adds reveal animations using
        the Intersection Observer API to detect when the elements appear in the
        viewport. Animations are internally provided by Emotion and implemented
        as CSS Animations to benefit from hardware acceleration.
      </Text>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link
          href="https://github.com/dennismorello/react-test-attributes"
          isExternal
        >
          React Test Attributes
        </Link>
      }
      subtitle="Open Source Software – React Library"
    >
      <Text>
        A library for React apps that decorates the DOM with custom attributes
        that can be used to uniquely indentify elements in a page. The main use
        case is for E2E testing using tools like Cypress or Selenium.
      </Text>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://morello.dev" isExternal>
          JavaScript Notes
        </Link>
      }
      subtitle="Dev Blog"
    >
      <Text>
        A blog where I write about JavaScript, ReactJS and other dev stuff.
      </Text>
    </DescriptiveBlock>
  </VStack>
);

export default Projects;
