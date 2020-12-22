import { useState } from "react";
import { Button, Grid, GridItem, Input, Textarea } from "@chakra-ui/react";

const ContactForm = ({ isSubmitting, onSubmit, ...otherProps }) => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormItemChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(contactFormData);
  };

  return (
    <Grid
      as="form"
      templateColumns="repeat(3, 1fr)"
      gap={8}
      onSubmit={handleFormSubmit}
      {...otherProps}
    >
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="YOUR NAME"
          type="text"
          name="name"
          value={contactFormData.name}
          onChange={handleFormItemChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="YOUR EMAIL"
          type="email"
          name="email"
          value={contactFormData.email}
          onChange={handleFormItemChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Input
          placeholder="SUBJECT"
          type="text"
          name="subject"
          value={contactFormData.subject}
          onChange={handleFormItemChange}
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Textarea
          placeholder="MESSAGE"
          name="message"
          rows={5}
          value={contactFormData.message}
          onChange={handleFormItemChange}
        />
      </GridItem>
      <GridItem colSpan={[undefined, 3, 1]}>
        <Button
          type="submit"
          size="lg"
          w={["full", null, "auto"]}
          isLoading={isSubmitting}
        >
          Send Message
        </Button>
      </GridItem>
    </Grid>
  );
};
export default ContactForm;
