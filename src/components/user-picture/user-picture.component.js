import { Image } from "@chakra-ui/react";

const UserPicture = (props) => (
  <Image
    boxSize={[64, undefined, "xs"]}
    bgColor="teal.300"
    borderRadius={["full", undefined, "2xl"]}
    shadow="dark-lg"
    objectFit="cover"
    objectPosition="center"
    alt="Dennis Morello"
    src="/images/profile.png"
    {...props}
  />
);

export default UserPicture;
