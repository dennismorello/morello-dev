import NextImage from "next/image";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const UserPicture = (props) => {
  const imgSize = useBreakpointValue([256, null, 320]);

  return (
    <Box
      boxSize={imgSize}
      bgColor="teal.300"
      borderRadius={["full", null, "2xl"]}
      shadow="dark-lg"
      overflow="hidden"
      {...props}
    >
      <NextImage
        src="/images/profile.png"
        alt="Avatar of Dennis Morello"
        layout="fixed"
        width={imgSize ?? 256}
        height={imgSize ?? 256}
        preload
      />
    </Box>
  );
};

export default UserPicture;
