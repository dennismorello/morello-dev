import { Link, Text, VStack } from "@chakra-ui/react";

import DateRange from "@/components/DateRange/DateRange.component";
import DescriptiveBlock from "@/components/DescriptiveBlock/DescriptiveBlock.component";

const Publications = ({ publicationsList, ...otherProps }) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...otherProps}>
    {publicationsList.map(
      ({ name, publisher, releaseDate, summary, website }) => (
        <DescriptiveBlock
          key={name}
          title={
            <Link href={website} isExternal>
              {name} (
              <DateRange endIsoDate={releaseDate} />)
            </Link>
          }
          subtitle={publisher}
        >
          <Text mt={2}>{summary}</Text>
        </DescriptiveBlock>
      )
    )}
  </VStack>
);

export default Publications;
