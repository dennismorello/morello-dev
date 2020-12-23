import { Box, Stack } from "@chakra-ui/react";

const DetailRow = ({ title, children, ...otherProps }) => (
  <Stack
    direction={["column", null, "row"]}
    align={["flex-start", null, "center"]}
    justify="space-between"
    spacing={[0, null, 2]}
    {...otherProps}
  >
    <Box fontWeight="bold">{title}</Box>
    <Box>{children}</Box>
  </Stack>
);

export default DetailRow;
