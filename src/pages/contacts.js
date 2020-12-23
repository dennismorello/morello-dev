import { NextSeo } from "next-seo";
import { Container, Heading, SimpleGrid, chakra } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/layout.component";
import SocialCard from "../components/social-card/social-card.component";

const ContactsPage = () => (
  <Layout>
    <NextSeo title="Contacts" />

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
      <SimpleGrid columns={[1, 2, 4]} gap={[6, null, 8]}>
        <SocialCard
          href="https://twitter.com/dennismorello"
          colorScheme="twitter"
        >
          Twitter
        </SocialCard>
        <SocialCard href="https://github.com/dennismorello" colorScheme="gray">
          GitHub
        </SocialCard>
        <SocialCard
          href="https://instagram.com/dennismrl"
          colorScheme="instagram"
        >
          Instagram
        </SocialCard>
        <SocialCard
          href="https://linkedin.com/in/dennismorello"
          colorScheme="linkedin"
        >
          LinkedIn
        </SocialCard>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default ContactsPage;
