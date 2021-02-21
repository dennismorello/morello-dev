import { Box } from "@chakra-ui/react";

const ObliqueBackground = (props) => {
  return (
    <Box
      pos="fixed"
      zIndex="base"
      h="200%"
      w="100%"
      top="-50%"
      left="-75%"
      bgColor="blue.300"
      transform="rotate(-12deg)"
      {...props}
    />
  );
};

export default ObliqueBackground;
