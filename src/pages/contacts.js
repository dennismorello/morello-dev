import { useState } from "react";
import Head from "next/head";
import { Container, Heading, chakra, useToast } from "@chakra-ui/react";

// Components
import ContactForm from "../components/contact-form/contact-form.component";
import Layout from "../components/layout/layout.component";

const ContactsPage = () => {
  const [isEmailBeingSent, setIsEmailBeingSent] = useState(false);
  const toast = useToast();

  const handleContactFormSubmit = async (data) => {
    setIsEmailBeingSent(true);
    await new Promise((resolve) => setTimeout(() => resolve(data), 1000));
    setIsEmailBeingSent(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contacts | Dennis Morello</title>
      </Head>

      <Heading
        as="h1"
        mb={[12, null, 20]}
        size="2xl"
        fontWeight="black"
        textAlign={["left", null, "center"]}
      >
        Contact <chakra.span color="teal.300">me</chakra.span>
      </Heading>

      <Container as="section" maxW="6xl">
        <ContactForm
          isSubmitting={isEmailBeingSent}
          onSubmit={handleContactFormSubmit}
        />
      </Container>
    </Layout>
  );
};

export default ContactsPage;
