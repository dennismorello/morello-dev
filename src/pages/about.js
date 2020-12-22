import Head from "next/head";
import { Container, Divider, Heading, chakra } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/layout.component";
import PersonalInfo from "../components/personal-info/personal-info.component";

const AboutPage = () => (
  <Layout>
    <Head>
      <title>About | Dennis Morello</title>
    </Head>

    <Heading
      as="h1"
      mb={[12, null, 20]}
      size="2xl"
      fontWeight="black"
      textAlign={["left", null, "center"]}
    >
      About <chakra.span color="teal.300">me</chakra.span>
    </Heading>

    <Container as="section" maxW="6xl">
      <Heading as="h2" size="lg">
        Personal info
      </Heading>
      <PersonalInfo />
    </Container>

    <Divider w="md" mx="auto" my={16} />

    <Container as="section" maxW="6xl">
      <Heading as="h2" size="lg">
        Skills
      </Heading>
    </Container>

    <Divider w="md" mx="auto" my={16} />

    <Container as="section" maxW="6xl">
      <Heading as="h2" size="lg">
        Experience &amp; education
      </Heading>
    </Container>
  </Layout>
);

export default AboutPage;
