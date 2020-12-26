import NextImage from "next/image";
import { Box } from "@chakra-ui/react";

const UserPicture = ({ alt, src, ...otherProps }) => (
  <Box
    boxSize={[64, null, "xs"]}
    bgColor="teal.300"
    borderRadius={["full", null, "2xl"]}
    shadow="dark-lg"
    overflow="hidden"
    {...otherProps}
  >
    <NextImage
      src={src}
      alt={alt}
      layout="intrinsic"
      width={320}
      height={320}
      priority
    />
  </Box>
);

export default UserPicture;
