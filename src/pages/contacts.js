import Head from "next/head";
import { Container, Heading, chakra } from "@chakra-ui/react";

// Components
import ContactForm from "../components/contact-form/contact-form.component";
import Layout from "../components/layout/layout.component";
import NavBar from "../components/nav-bar/nav-bar.component";

export default function Contacts() {
  const handleContactFormSubmit = async ({
    message,
    sender_email,
    sender_name,
    subject,
  }) => {
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderEmail: sender_email,
        senderName: sender_name,
        subject,
        message,
      }),
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contacts | Dennis Morello</title>
      </Head>

      <NavBar />

      <Heading
        as="h1"
        mb={[12, undefined, 20]}
        size="2xl"
        fontWeight="black"
        textAlign={["left", undefined, "center"]}
      >
        Contact <chakra.span color="teal.300">me</chakra.span>
      </Heading>

      <Container as="section" maxW="6xl">
        <ContactForm onSubmit={handleContactFormSubmit} />
      </Container>
    </Layout>
  );
}
