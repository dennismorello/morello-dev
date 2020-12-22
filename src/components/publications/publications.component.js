import { Box, Link, Text, VStack } from "@chakra-ui/react";

// Components
import DescriptiveBlock from "../descriptive-block/descriptive-block.component";

const Publications = (props) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...props}>
    <DescriptiveBlock
      title={
        <Link href="https://goo.gl/Av6kqG" isExternal>
          "Best Dinner Ever!!!": Automatic Generation of Restaurant Reviews with
          LSTM-RNN
        </Link>
      }
      subtitle="Alberto Bartoli, Andrea De Lorenzo, Eric Medvet, Dennis Morello, Fabiano Tarlao"
    >
      <Box pt={4}>
        <Text as="i">Abstract</Text>
        <Text mt={2}>
          Consumer reviews are an important information resource for people and
          a fundamental part of everyday decisionmaking. Product reviews have an
          economical relevance which may attract malicious people to commit a
          review fraud, by writing false reviews. In this work, we investigate
          the possibility of generating hundreds of false restaurant reviews
          automatically and very quickly.
        </Text>
        <Text mt={2}>
          We propose and evaluate a method for automatic generation of
          restaurant reviews tailored to the desired rating and restaurant
          category. A key feature of our work is the experimental evaluation
          which involves human users. We assessed the ability of our method to
          actually deceive users by presenting to them sets of reviews including
          a mix of genuine reviews and of machinegenerated reviews. Users were
          not aware of the aim of the evaluation and the existence of
          machine-generated reviews. As it turns out, it is feasible to
          automatically generate realistic reviews which can manipulate the
          opinion of the user.
        </Text>
      </Box>
    </DescriptiveBlock>
  </VStack>
);

export default Publications;
