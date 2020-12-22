import { Image } from "@chakra-ui/react";

const UserPicture = (props) => (
  <Image
    boxSize={[64, null, "xs"]}
    bgColor="teal.300"
    borderRadius={["full", null, "2xl"]}
    shadow="dark-lg"
    objectFit="cover"
    objectPosition="center"
    alt="Avatar of Dennis Morello"
    src="/images/profile.png"
    {...props}
  />
);

export default UserPicture;
