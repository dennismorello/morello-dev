import { Box, Link, Text, VStack } from "@chakra-ui/react";

// Components
import DescriptiveBlock from "../descriptive-block/descriptive-block.component";

const Education = (props) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...props}>
    <DescriptiveBlock
      title={
        <Link href="https://www.units.it" isExternal>
          Università degli Studi di Trieste (2014 - 2016)
        </Link>
      }
      subtitle="Master's Degree in Computer Science Engineering, Computer Science Engineering, 110/110 with honors"
    >
      <Box pt={4}>
        <Text>
          Design and development of an automatic fake reviews generator based on
          neural networks.
        </Text>
      </Box>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://www.units.it" isExternal>
          Università degli Studi di Trieste (2009 - 2013)
        </Link>
      }
      subtitle="Bachelor's Degree in Information Technology Engineering, Information Technology Engineering, 105/110"
    >
      <Box pt={4}>
        <Text>
          Design and development of an automated tool to systematically alter
          JavaScript code for testing purposes.
        </Text>
      </Box>
    </DescriptiveBlock>
    <DescriptiveBlock
      title={
        <Link href="https://isitgo.it" isExternal>
          I.T.I. "G. Galilei" – Gorizia (2004 - 2009)
        </Link>
      }
      subtitle="IT Expert, Information Technology, Computer Systems, 100/100"
    ></DescriptiveBlock>
  </VStack>
);

export default Education;
