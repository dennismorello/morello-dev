import { Link, Text, VStack } from "@chakra-ui/react";

// Components
import DateRange from "../DateRange/DateRange.component";
import DescriptiveBlock from "../DescriptiveBlock/DescriptiveBlock.component";

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
