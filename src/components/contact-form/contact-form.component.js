import { useImmer } from "use-immer";
import { Button, Grid, GridItem, Input, Textarea } from "@chakra-ui/react";

const ContactForm = ({ onSubmit, ...otherProps }) => {
  const [email, updateEmail] = useImmer({
    sender_name: "",
    sender_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    updateEmail((draft) => {
      draft[name] = value;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(email);
  };

  return (
    <Grid
      as="form"
      templateColumns="repeat(3, 1fr)"
      gap={8}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="YOUR NAME"
          type="text"
          name="sender_name"
          onChange={handleChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="YOUR EMAIL"
          type="email"
          name="sender_email"
          onChange={handleChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="SUBJECT"
          type="text"
          name="subject"
          onChange={handleChange}
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Textarea
          placeholder="MESSAGE"
          name="message"
          onChange={handleChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Button type="submit" size="lg" w={["full", undefined, "auto"]}>
          Send Message
        </Button>
      </GridItem>
    </Grid>
  );
};

export default ContactForm;
