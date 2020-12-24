import { Link, Text, VStack } from "@chakra-ui/react";

// Components
import DateRange from "@/components/DateRange/DateRange.component";
import DescriptiveBlock from "@/components/DescriptiveBlock/DescriptiveBlock.component";

const Education = ({ educationList, ...otherProps }) => (
  <VStack align="self-start" spacing={[8, null, 12]} {...otherProps}>
    {educationList.map(
      ({
        area,
        description,
        institution,
        gpa,
        startDate,
        endDate,
        studyType,
        website,
      }) => (
        <DescriptiveBlock
          key={startDate}
          title={
            <Link href={website} isExternal>
              {institution} (
              <DateRange startIsoDate={startDate} endIsoDate={endDate} />)
            </Link>
          }
          subtitle={`${studyType} in ${area}, ${gpa}`}
        >
          <Text>{description}</Text>
        </DescriptiveBlock>
      )
    )}
  </VStack>
);

export default Education;
