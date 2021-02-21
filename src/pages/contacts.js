import { chakra, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Layout from "@/components/Layout/Layout.component";
import SocialCard from "@/components/SocialCard/SocialCard.component";

const ContactsPage = () => (
  <Layout>
    <NextSeo title="Contacts" />

    <Heading
      as="h1"
      size="2xl"
      fontWeight="black"
      textAlign={["left", null, "center"]}
      pos={["sticky", null, "relative"]}
      top={[0, null, undefined]}
      bg={["gray.800", null, undefined]}
      zIndex={["sticky", null, undefined]}
      py={[2, null, undefined]}
      mb={[10, null, 20]}
      mt={[-2, null, undefined]}
    >
      Contact <chakra.span color="blue.300">me</chakra.span>
    </Heading>

    <Container as="section" maxW="6xl">
      <SimpleGrid columns={[1, 2, 4]} gap={[6, null, 8]}>
        <SocialCard href="/twitter" colorScheme="twitter">
          Twitter
        </SocialCard>
        <SocialCard href="/github" colorScheme="gray">
          GitHub
        </SocialCard>
        <SocialCard href="/instagram" colorScheme="instagram">
          Instagram
        </SocialCard>
        <SocialCard href="/linkedin" colorScheme="linkedin">
          LinkedIn
        </SocialCard>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default ContactsPage;
