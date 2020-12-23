import {
  Box,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

// Components
import DescriptiveBlock from "../descriptive-block/descriptive-block.component";

const WorkExperiences = (props) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...props}>
    <DescriptiveBlock
      title={
        <Link href="https://contentwise.com" isExternal>
          ContentWise (Apr, 2019 - Current)
        </Link>
      }
      subtitle="Software Engineer"
    >
      <Text>I am responsible of many things, including:</Text>
      <UnorderedList pl={4} py={2}>
        <ListItem>
          architecting, building and maintaining next-gen web-apps for our
          products
        </ListItem>
        <ListItem>
          taking part at the recruiting process, interviewing and evaluating
          candidates
        </ListItem>
        <ListItem>mentoring junior colleagues in their activities</ListItem>
        <ListItem>speaking at internal meet-ups</ListItem>
      </UnorderedList>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://contentwise.com" isExternal>
          ContentWise (May, 2016 - Apr, 2019)
        </Link>
      }
      subtitle="Junior Software Engineer"
    >
      <Text>
        I was responsible to build and maintain the administrative portal for
        our recommender engine.
      </Text>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://www.innovatrieste.it" isExternal>
          Innova S.p.A. (Oct, 2015 - Dec, 2015)
        </Link>
      }
      subtitle="Software Developer Intern"
    >
      <Text>
        I developed an HTML5/JS audio player running on nw.js with waveform
        visualization and near real-time audio filters.
      </Text>
    </DescriptiveBlock>
  </VStack>
);

export default WorkExperiences;
