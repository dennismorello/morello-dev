import { Link, SimpleGrid } from "@chakra-ui/react";

// Components
import DetailRow from "../detail-row/detail-row.component";

const PersonalInfo = (props) => (
  <SimpleGrid
    columns={[1, null, 2]}
    columnGap={16}
    rowGap={[4, null, 6]}
    {...props}
  >
    <DetailRow title="Name">Dennis Morello</DetailRow>
    <DetailRow title="Nationality">Italian</DetailRow>
    <DetailRow title="Role">Front-End Engineer</DetailRow>
    <DetailRow title="E-mail">
      <Link href="mailto:dennismorello@gmail.com?subject=[morello.dev]">
        dennismorello@gmail.com
      </Link>
    </DetailRow>
  </SimpleGrid>
);

export default PersonalInfo;
