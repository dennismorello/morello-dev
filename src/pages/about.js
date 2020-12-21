import Head from "next/head";
import { Container, Divider, Heading, chakra } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/layout.component";
import NavBar from "../components/nav-bar/nav-bar.component";
import PersonalInfo from "../components/personal-info/personal-info.component";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Dennis Morello</title>
      </Head>

      <NavBar />

      <Heading
        as="h1"
        mb={[12, undefined, 20]}
        size="2xl"
        fontWeight="black"
        textAlign={["left", undefined, "center"]}
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
}
