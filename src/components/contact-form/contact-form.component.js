import { Button, Grid, GridItem, Input, Textarea } from "@chakra-ui/react";

const ContactForm = (props) => (
  <Grid as="form" templateColumns="repeat(3, 1fr)" gap={8} {...props}>
    <GridItem colSpan={[undefined, 3, 1]}>
      <Input placeholder="YOUR NAME" type="text" name="sender_name" />
    </GridItem>
    <GridItem colSpan={[undefined, 3, 1]}>
      <Input placeholder="YOUR EMAIL" type="email" name="sender_email" />
    </GridItem>
    <GridItem colSpan={[undefined, 3, 1]}>
      <Input placeholder="SUBJECT" type="text" name="subject" />
    </GridItem>
    <GridItem colSpan={3}>
      <Textarea placeholder="MESSAGE" name="message" />
    </GridItem>
    <GridItem colSpan={[undefined, 3, 1]}>
      <Button type="submit" size="lg" w={["full", undefined, "auto"]}>
        Send Message
      </Button>
    </GridItem>
  </Grid>
);

export default ContactForm;
