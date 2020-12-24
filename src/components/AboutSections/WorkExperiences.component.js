import { Link, Text, VStack } from "@chakra-ui/react";

// Components
import DateRange from "@/components/DateRange/DateRange.component";
import DescriptiveBlock from "@/components/DescriptiveBlock/DescriptiveBlock.component";

const WorkExperiences = ({ jobsList, ...otherProps }) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...otherProps}>
    {jobsList.map(
      ({ company, position, startDate, endDate, summary, website }) => (
        <DescriptiveBlock
          key={startDate}
          title={
            <Link href={website} isExternal>
              {company} (
              <DateRange startIsoDate={startDate} endIsoDate={endDate} />)
            </Link>
          }
          subtitle={position}
        >
          <Text>{summary}</Text>
        </DescriptiveBlock>
      )
    )}
  </VStack>
);

export default WorkExperiences;
