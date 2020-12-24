import { Link, SimpleGrid } from "@chakra-ui/react";

// Components
import DetailRow from "@/components/DetailRow/DetailRow.component";

const PersonalInfo = ({ name, email, location, role, ...otherProps }) => (
  <SimpleGrid
    columns={[1, null, 2]}
    columnGap={16}
    rowGap={[4, null, 6]}
    {...otherProps}
  >
    <DetailRow title="Name">{name}</DetailRow>
    <DetailRow title="Role">{role}</DetailRow>
    <DetailRow title="Location">{location}</DetailRow>
    <DetailRow title="E-mail">
      <Link href={`mailto:${email}`}>{email}</Link>
    </DetailRow>
  </SimpleGrid>
);

export default PersonalInfo;
