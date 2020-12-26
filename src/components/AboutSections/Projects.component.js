import { Link, Tag, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

// Components
import DescriptiveBlock from "@/components/DescriptiveBlock/DescriptiveBlock.component";

const Projects = ({ projectsList, ...otherProps }) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...otherProps}>
    {projectsList.map(
      ({
        name,
        displayName,
        description,
        githubUrl,
        languages,
        libraries,
        summary,
      }) => (
        <DescriptiveBlock
          key={name}
          title={
            <Link href={githubUrl} isExternal>
              {displayName}
            </Link>
          }
          subtitle={summary}
        >
          <VStack align="flex-start" mt={[-2, null, -4]} spacing={4}>
            <Wrap>
              {[...languages, ...libraries].map((text) => (
                <WrapItem key={text}>
                  <Tag>{text}</Tag>
                </WrapItem>
              ))}
            </Wrap>
            <Text>{description}</Text>
          </VStack>
        </DescriptiveBlock>
      )
    )}
  </VStack>
);

export default Projects;
